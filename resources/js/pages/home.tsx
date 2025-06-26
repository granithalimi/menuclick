import { Head, Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { IoIosCloseCircle } from 'react-icons/io';
import '../../css/style.css';

export default function Home({ categories, all_products, table_id }: any) {
    const [category, setCategories] = useState<any>({});
    const [products, setProducts] = useState<any>({});
    const [product, setProduct] = useState<any>({});
    const [showProduct, setShowProduct] = useState<any>(false);
    const [showProducts, setShowProducts] = useState<any>(false);

    useEffect(() => {
        setCategories(categories);
    }, [categories]);

    // useEffect(()=> {
    //     console.log("a;osdiv")
    // })

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
    return (
        <div className="min-h-screen w-full bg-blue-100">
            <Head title="Categories" />
            <div className="flex justify-center">
                <Link href="#" className="mt-2 rounded-lg bg-red-500 px-3 py-1 text-white">
                    Call a Waiter
                </Link>
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
                            <img className="mx-auto w-9/12 rounded-lg" src={`${window.location.origin}/storage/images/${product.pic}`} />
                            <div className="mx-auto w-9/12">
                                <h1 className="my-3 text-left font-bold text-gray-500">{product.description}</h1>
                            </div>
                            <h1 className="my-3 text-center font-bold text-green-500">${product.price}</h1>
                            <button
                                className="rounded-lg bg-blue-500 px-3 py-1 text-sm font-extrabold text-white"
                                onClick={(e) => console.log('added to cart!!')}
                            >
                                Add to Cart
                            </button>
                        </div>
                    ) : (
                        <h1 className="text-center text-xl text-black">Loading...</h1>
                    )}
                </div>
            </div>
        </div>
    );
}
