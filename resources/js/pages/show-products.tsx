import DashLayout from '@/layouts/dash-layout';
import { Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa6';

export default function ShowProducts({ categories, name }: any) {
    const [category, setCategories] = useState<any>({});
    useEffect(() => {
        setCategories(categories);
    }, [categories]);
    return (
        <DashLayout title={`${name} Products`}>
            <Link
                href={route('category.index')}
                className="inline-flex items-center gap-1 rounded-lg border-1 border-white px-3 py-3 text-white duration-300 hover:bg-white hover:text-black"
            >
                <FaArrowLeft />
                Categories
            </Link>
            <Link
                href={route('dashboard')}
                className="ms-3 rounded-lg border-1 border-white px-3 py-3 text-white duration-300 hover:bg-white hover:text-black"
            >
                Dashboard
            </Link>
            <h1 className="my-5 text-3xl font-extrabold">{name} Products</h1>
            {category && category.length > 0 && (
                <div className="grid grid-cols-4">
                    {category.map((p: any, ind: any) => (
                        <div
                            key={ind}
                            className="mx-3 my-3 flex flex-col items-center gap-3 rounded-sm border-1 border-white py-3 text-center text-white duration-300"
                        >
                            <img
                                className="mt-1 h-40 w-40 rounded-lg object-cover"
                                src="https://media-cdn.tripadvisor.com/media/photo-p/0e/96/7f/97/coffe-latte-100-arabica.jpg"
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
            )}
        </DashLayout>
    );
}
