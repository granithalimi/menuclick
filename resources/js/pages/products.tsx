import DashLayout from '@/layouts/dash-layout';
import { Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function Products({ products }: any) {
    const [product, setProducts] = useState<any>({})
    useEffect(()=> {
        setProducts(products)
    }, [products])
    return (
        <DashLayout title="Products">
            <Link
                href={route('dashboard')}
                className="ms-3 rounded-lg border-1 border-white px-3 py-3 text-white duration-300 hover:bg-white hover:text-black"
            >
                Dashboard
            </Link>

            <div className="mt-8 mb-5">
                <Link
                    href={route('product.create')}
                    className="rounded-lg bg-blue-500 px-3 py-1 text-xl font-extrabold duration-300 hover:bg-blue-400"
                >
                    Create a Product
                </Link>
            </div>

            {product && product.length > 0 && (
                <>
                    <div className="mb-5 text-3xl font-extrabold">Products</div>
                    <div className="grid grid-cols-4">
                        {product.map((p: any, ind: any) => (
                            <div
                                key={ind}
                                className="mx-3 my-3 flex flex-col items-center gap-3 rounded-sm border-1 border-white py-3 text-center text-white duration-300"
                            >
                                <img
                                    className="mt-1 h-40 w-40 rounded-lg object-cover"
                                    src={`${window.location.origin}/storage/images/${p.pic}`}
                                />
                                <h1 className="text-xl font-extrabold">{p.name}</h1>
                                <div className="flex items-center justify-center gap-1">
                                    <Link
                                        href={route("product.show", p.id)}
                                        className="cursor-pointer rounded-lg bg-green-500 px-3 py-1 text-sm font-extrabold text-white duration-300 hover:bg-green-400"
                                    >
                                        Show More
                                    </Link>
                                    <Link
                                        href={route('product.edit', p.id)}
                                        className="cursor-pointer rounded-lg bg-gray-500 px-3 py-1 text-sm font-extrabold text-white duration-300 hover:bg-gray-400"
                                    >
                                        Edit
                                    </Link>
                                </div>
                            </div>

                        ))}
                    </div>
                </>
            )}

        </DashLayout>
    );
}
