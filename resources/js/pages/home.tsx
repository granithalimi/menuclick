import { Head, Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function Home({ categories, table_id }: any) {
    const [category, setCategories] = useState<any>({});
    useEffect(() => {
        setCategories(categories);
    }, [categories]);
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
                                    <Link href={route("table.category", [table_id, c.id])} className="rounded-lg bg-blue-500 px-3 py-1 text-sm font-extrabold text-white">Show Products</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
