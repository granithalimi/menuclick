import { Head, Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import '../../css/style.css';

export default function Home({ categories, products, table_id }: any) {
    const [category, setCategories] = useState<any>({});
    const [product, setProducts] = useState<any>({});
    const [showProducts, setShowProducts] = useState<any>(false);

    useEffect(() => {
        setCategories(categories);
    }, [categories]);

    // useEffect(()=> {
    //     console.log("a;osdiv")
    // })

    const handleShow = (e: any, id: any) => {
        setShowProducts(true);
        setProducts((p: any) => products.filter((p: any) => p.category_id === id));
    };
    const handleClose = (e: any) => {
        setShowProducts(false);
        setProducts({});
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
                    <h1 className="text-center text-2xl font-extrabold text-black">Categories</h1>
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
                                <h1 className="text-xl font-extrabold text-black">{c.name}</h1>
                                <div className="flex items-center justify-center gap-1 text-black">
                                    <button
                                        onClick={(e) => handleShow(e, c.id)}
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
                <div className="mt-4 flex h-1/12 w-full justify-end pe-4">
                    <IoClose onClick={(e) => handleClose(e)} className="text-3xl text-black" />
                </div>
                <div>
                    {product && product.length > 0 ? (
                        <>
                            <h1 className='text-black text-center text-3xl font-extrabold'>Products</h1>
                            <div className='grid grid-cols-2'>
                            {product.map((p:any, ind:any) => (
                            <div
                                key={ind}
                                className="mx-3 my-3 flex flex-col items-center gap-3 rounded-sm border-1 border-black py-3 text-center text-white duration-300"
                            >
                                <img
                                    className="mt-1 h-10/12 w-10/12 rounded-lg object-cover"
                                    src={`${window.location.origin}/storage/images/${p.pic}`}
                                />
                                <h1 className="text-xl font-extrabold text-black">{p.name}</h1>
                                <div className="flex items-center justify-center gap-1 text-black">
                                    <button
                                        className="rounded-lg bg-blue-500 px-3 py-1 text-sm font-extrabold text-white"
                                    >
                                        Show Products
                                    </button>
                                </div>
                                </div>
                            ))}
                            </div>
                        </>
                    ) : (
                        <h1 className='text-center text-black text-xl'>No products in this Categorie :(</h1>
                    )}
                </div>
            </div>
        </div>
    );
}
