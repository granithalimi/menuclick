import DashLayout from '@/layouts/dash-layout';
import { Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function Categories({ categories }: any) {
    const [category, setCategories] = useState<any>({});

    useEffect(() => {
        setCategories(categories);
    }, [categories]);
    return (
        <DashLayout title="Categories">
            <Link
                href={route('dashboard')}
                className="ms-3 rounded-lg border-1 border-white px-3 py-3 text-white duration-300 hover:bg-white hover:text-black"
            >
                Dashboard
            </Link>

            <div className="mt-8 mb-5">
                <Link
                    href={route('category.create')}
                    className="rounded-lg bg-blue-500 px-3 py-1 text-xl font-extrabold duration-300 hover:bg-blue-400"
                >
                    Create a Category
                </Link>
            </div>

            {category && category.length > 0 && (
                <>
                    <div className="mb-5 text-3xl font-extrabold">Categories</div>
                    <div className="grid grid-cols-4">
                        {category.map((c: any, ind: any) => (
                            <Link
                                href={route('category.edit', c.id)}
                                className="mx-3 my-3 flex flex-col items-center rounded-sm border-1 border-white py-1 text-center text-white duration-300 hover:bg-white hover:text-black"
                                key={ind}
                            >
                                <img
                                    className="mt-1 h-40 w-40 rounded-lg object-cover"
                                    src="data:image/jpeg;base64,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"
                                />
                                <h1 className="my-2 text-2xl font-extrabold">{c.name}</h1>
                            </Link>
                        ))}
                    </div>
                </>
            )}
        </DashLayout>
    );
}
