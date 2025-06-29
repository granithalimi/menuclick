import { Head, Link, useForm } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { IoIosCloseCircle } from 'react-icons/io';
import '../../css/style.css';

export default function Home({ categories, all_products, table_id }: any) {
    const [category, setCategories] = useState<any>({});
    const [products, setProducts] = useState<any>({});
    const [product, setProduct] = useState<any>({});
    const [showProduct, setShowProduct] = useState<any>(false);
    const [showProducts, setShowProducts] = useState<any>(false);
    const [order, setOrder] = useState<any>({});
    const [qty, setQty] = useState<any>(1);
    const [showCart, setShowCart] = useState<any>(false);

    const { data, setData, post } = useForm<any>({
        id: table_id,
        order: null,
    });

    useEffect(() => {
        setCategories(categories);
    }, [categories]);

    useEffect(() => {
        setData('order', order);
    }, [order]);

    const handleShowProducts = (e: any, id: any) => {
        setShowProducts(true);
        setProducts((p: any) => all_products.filter((p: any) => p.category_id === id));
    };
    const handleCloseProducts = (e: any) => {
        setShowProducts(false);
        setTimeout(() => {
            setProducts({});
        }, 600);
    };

    const handleShowProduct = (e: any, id: any) => {
        setShowProduct(true);
        setProduct((p: any) => all_products.find((p: any) => p.id === id));
    };

    const handleCloseProduct = (e: any) => {
        setShowProduct(false);
        setTimeout(() => {
            setProduct({});
        }, 600);
    };

    const handleAddToCart = (e: any, id: any) => {
        if (qty < 1) {
            return;
        }
        setOrder((p: any) => {
            if (p.length > 0) {
                const prod = p.find((p: any) => p.id === id);
                if (prod) {
                    p.find((p: any) => p.id === id).qty += qty;
                    return [...p];
                }
                return [...p, { id: id, qty: qty }];
            }
            return [{ id: id, qty: qty }];
        });
        alert(`${qty} ${product.name}${qty > 1 ? 's' : ''} added to cart`);
        setQty((p: any) => (p = 1));
    };

    const placeOrder = (e: any) => {
        if (order && order.length > 0) {
            if (confirm('Do  you wanna place this order?')) {
                e.preventDefault();
                console.log(order);
                post(route('order.store'));
                setOrder({});
            }
        }
    };

    const handleAddQty = (e: any, id: any) => {
        e.preventDefault();
        setOrder((p: any) => {
            p.find((p: any) => p.id === id).qty += 1;
            setData('order', [...p]);
            return [...p];
        });
    };
    const handleRemoveQty = (e: any, id: any) => {
        e.preventDefault();
        setOrder((p: any) => {
            const prod = p.find((p: any) => p.id === id);
            if (prod.qty === 1) {
                return p.filter((p: any) => p.id !== id);
            }
            p.find((p: any) => p.id === id).qty -= 1;
            return [...p];
        });
    };
    return (
        <div className="min-h-screen w-full bg-blue-100">
            <Head title="Categories" />
            <div className="flex justify-center gap-1">
                <Link href="#" className="mt-2 rounded-lg bg-red-500 px-3 py-1 font-extrabold text-white">
                    Call a Waiter :(
                </Link>
                <button onClick={(e) => setShowCart(true)} className="mt-2 rounded-lg bg-yellow-400 px-3 py-1 font-extrabold text-white">
                    Place Order
                </button>
            </div>
            {category && category.length > 0 && (
                <>
                    <h1 className="general-title-font text-center text-3xl font-extrabold text-black">Categories</h1>
                    <div className="grid grid-cols-2 md:grid-cols-4">
                        {category.map((c: any, ind: any) => (
                            <div
                                key={ind}
                                className="mx-3 my-3 flex flex-col items-center gap-3 rounded-sm border-1 border-black py-3 text-center text-white duration-300"
                            >
                                <img
                                    className="mt-1 h-10/12 w-10/12 rounded-lg object-cover"
                                    src={`${window.location.origin}/storage/images/${c.pic}`}
                                />
                                <h1 className="categories-title-font text-xl font-extrabold text-gray-800">{c.name}</h1>
                                <div className="flex items-center justify-center gap-1 text-black">
                                    <button
                                        onClick={(e) => handleShowProducts(e, c.id)}
                                        className="rounded-lg bg-blue-500 px-3 py-1 text-sm font-extrabold text-white"
                                    >
                                        Show Products
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}

            {/* Show Products Div */}
            <div
                className={`${showProducts ? 'show-products z-10' : 'hide-products -z-10'} fixed top-0 left-0 h-screen w-full flex-col overflow-scroll bg-white`}
            >
                <div className="mt-4 mb-0 flex h-1/12 w-full justify-end pe-4">
                    <IoIosCloseCircle onClick={(e) => handleCloseProducts(e)} className="text-5xl text-red-500" />
                </div>
                <div>
                    {products && products.length > 0 ? (
                        <>
                            <h1 className="general-title-font text-center text-3xl font-extrabold text-black">Products</h1>
                            <div className="grid grid-cols-2 md:grid-cols-4">
                                {products.map((p: any, ind: any) => (
                                    <div
                                        key={ind}
                                        className="mx-3 my-3 flex flex-col items-center gap-3 rounded-sm border-1 border-black py-3 text-center text-white duration-300"
                                    >
                                        <img
                                            className="mt-1 h-10/12 w-10/12 rounded-lg object-cover"
                                            src={`${window.location.origin}/storage/images/${p.pic}`}
                                        />
                                        <h1 className="product-title-font text-xl font-extrabold text-black">{p.name}</h1>
                                        <div className="flex items-center justify-center gap-1 text-black">
                                            <button
                                                onClick={(e) => handleShowProduct(e, p.id)}
                                                className="rounded-lg bg-blue-500 px-3 py-1 text-sm font-extrabold text-white"
                                            >
                                                Show Product
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    ) : (
                        <h1 className="text-center text-xl text-black">No products in this Category :(</h1>
                    )}
                </div>
            </div>

            {/* Show product div */}
            <div
                className={`${showProduct ? 'show-product z-20' : 'hide-product -z-20'} fixed top-0 left-0 h-screen w-full flex-col overflow-scroll bg-white`}
            >
                <div className="mt-4 mb-0 flex h-1/12 w-full justify-end pe-4">
                    <IoIosCloseCircle onClick={(e) => handleCloseProduct(e)} className="text-5xl text-red-500" />
                </div>
                <div>
                    {product ? (
                        <div className="flex w-full flex-col items-center">
                            <h1 className="product-title-font my-3 text-center text-2xl font-extrabold text-black">{product.name}</h1>
                            <img className="mx-auto w-9/12 rounded-lg md:w-5/12" src={`${window.location.origin}/storage/images/${product.pic}`} />
                            <div className="mx-auto w-9/12 md:w-5/12">
                                <h1 className="my-3 text-left font-bold text-gray-500">{product.description}</h1>
                            </div>
                            <h1 className="my-3 text-center font-bold text-green-500">${product.price}</h1>
                            <div className="my-3 flex items-center gap-3">
                                <label htmlFor="qty" className="text-left font-bold text-gray-500">
                                    Quantity:
                                </label>
                                <input
                                    min="1"
                                    value={qty}
                                    onChange={(e) => setQty(parseInt(e.target.value))}
                                    type="number"
                                    id="qty"
                                    className="w-16 rounded-md border-1 border-gray-500 py-1 ps-1 text-black"
                                />
                            </div>
                            <button
                                className="rounded-lg bg-blue-500 px-3 py-1 text-sm font-extrabold text-white"
                                onClick={(e) => handleAddToCart(e, product.id)}
                            >
                                Add to Cart
                            </button>
                        </div>
                    ) : (
                        <h1 className="text-center text-xl text-black">Loading...</h1>
                    )}
                </div>
            </div>

            {/* Show Cart */}
            <div
                className={`${showCart ? 'show-cart z-30' : 'hide-cart -z-30'} fixed bottom-0 flex h-9/12 w-full flex-col rounded-t-3xl bg-blue-100`}
            >
                {/* Close button */}
                <div className="flex h-1/12 w-full items-center justify-end rounded-t-xl bg-green-200 pe-4">
                    <IoIosCloseCircle onClick={(e) => setShowCart(false)} className="text-3xl text-red-500" />
                </div>
                {/* Orders */}
                <div className="flex h-10/12 w-full flex-col items-center overflow-y-scroll pt-3">
                    {order && order.length > 0 ? (
                        <>
                            {order.map((o: any, ind: any) => (
                                <div
                                    key={ind}
                                    className="mb-3 flex w-11/12 items-center justify-between gap-3 rounded-lg border-1 border-black px-3 py-1"
                                >
                                    <img
                                        src={`${window.location.origin}/storage/images/${all_products.find((p: any) => p.id == o.id).pic}`}
                                        className="h-12 w-12 rounded-lg object-cover"
                                    />
                                    <h1 className="text-black">{all_products.find((p: any) => p.id == o.id).name}</h1>
                                    <h1 className="text-green-500">${all_products.find((p: any) => p.id == o.id).price}</h1>
                                    <div className="flex items-center gap-2 text-black">
                                        <h1>qty:</h1>
                                        <button className="text-xl font-extrabold text-red-500" onClick={(e) => handleRemoveQty(e, o.id)}>
                                            -
                                        </button>
                                        <h1>{o.qty}</h1>
                                        <button className="text-xl font-extrabold text-green-500" onClick={(e) => handleAddQty(e, o.id)}>
                                            +
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </>
                    ) : (
                        <h1 className="my-2 text-black">No orders yet :(</h1>
                    )}
                </div>
                {/* Order Button */}
                <div className="flex h-1/12 w-full items-center justify-end bg-green-200 py-4 pe-4">
                    <button onClick={(e) => placeOrder(e)} className="rounded-lg bg-green-500 px-3 py-1 text-sm font-extrabold">
                        Place Order
                    </button>
                </div>
            </div>
        </div>
    );
}
