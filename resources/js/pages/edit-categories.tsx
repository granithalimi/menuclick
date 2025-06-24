import DashLayout from '@/layouts/dash-layout';
import { Link, useForm } from '@inertiajs/react';
import { FaArrowLeft } from 'react-icons/fa6';

export default function EditCategories({ category }: any) {
    const {
        data,
        setData,
        put,
        delete: destroy,
    } = useForm<any>({
        name: category.name,
        pic: category.pic,
    });

    const handleUpdate = (e: any) => {
        e.preventDefault();
        put(route('category.update', category.id));
    };

    const handleDelete = (e: any) => {
        if (confirm('Are you sure you want to delete this category?')) {
            e.preventDefault();
            destroy(route('category.destroy', category.id));
        }
    };
    return (
        <DashLayout title="Edit Categories">
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
            <form onSubmit={(e) => handleUpdate(e)} className="mt-5 mb-2" encType="multipart-formdata">
                <div className="flex flex-col">
                    <label htmlFor="name">Category Name</label>
                    <input
                        id="name"
                        value={data.name}
                        onChange={(e: any) => setData('name', e.target.value)}
                        className="w-80 rounded-lg bg-white py-1 ps-3 text-black"
                    />
                </div>
                <div className="mt-2 flex flex-col justify-start">
                    <label htmlFor="pic">Select a Picture</label>
                    <input type="file" id="pic" className="w-80 rounded-lg bg-white py-1 ps-5 text-black" />
                </div>
                <button
                    type="submit"
                    className="mt-3 cursor-pointer rounded-lg bg-green-500 px-3 py-1 text-sm font-extrabold text-white hover:bg-green-400"
                >
                    Update
                </button>
            </form>
            <button
                onClick={(e) => handleDelete(e)}
                className="cursor-pointer rounded-lg bg-red-500 px-3 py-1 text-sm font-extrabold text-white hover:bg-red-400"
            >
                Delete
            </button>
        </DashLayout>
    );
}
