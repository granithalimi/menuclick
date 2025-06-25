import DashLayout from '@/layouts/dash-layout';
import { Link, useForm } from '@inertiajs/react';
import { FaArrowLeft } from 'react-icons/fa6';

export default function EditProducts({ product, categories }: any) {
    const {
        data,
        setData,
        post,
        delete: destroy,
    } = useForm<any>({
        id: product.id,
        name: product.name,
        desc: product.description,
        pic: null,
        category: product.category_id,
    });
    const handleUpdate = (e: any) => {
        e.preventDefault();
        post(route('product.update', product.id));
    };
    const handleDelete = (e: any) => {
        if (confirm('Are you sure you want to delete this category?')) {
            e.preventDefault();
            destroy(route('product.destroy', product.id));
        }
    };
    return (
        <DashLayout title="Create Products">
            <Link
                href={route('product.index')}
                className="inline-flex items-center gap-1 rounded-lg border-1 border-white px-3 py-3 text-white duration-300 hover:bg-white hover:text-black"
            >
                <FaArrowLeft />
                Products
            </Link>
            <Link
                href={route('dashboard')}
                className="ms-3 rounded-lg border-1 border-white px-3 py-3 text-white duration-300 hover:bg-white hover:text-black"
            >
                Dashboard
            </Link>

            <form onSubmit={(e) => handleUpdate(e)} className="mt-5 mb-2" encType="multipart/form-data">
                <div className="flex flex-col">
                    <label htmlFor="name">Product Name</label>
                    <input
                        id="name"
                        value={data.name}
                        onChange={(e: any) => setData('name', e.target.value)}
                        className="w-80 rounded-lg bg-white py-1 ps-3 text-black"
                    />
                </div>
                <div className="mt-2 flex flex-col justify-start">
                    <label htmlFor="pic">Select a Picture</label>
                    <input
                        type="file"
                        onChange={(e: any) => setData('pic', e.target.files[0])}
                        id="pic"
                        className="w-80 rounded-lg bg-white py-1 ps-5 text-black"
                    />
                </div>
                <div className="mt-2 flex flex-col justify-start">
                    <label htmlFor="desc">Write a Description about the product</label>
                    <input
                        type="text"
                        value={data.desc}
                        id="desc"
                        onChange={(e) => setData('desc', e.target.value)}
                        className="w-80 rounded-lg bg-white py-1 ps-5 text-black"
                    />
                </div>
                <div className="mt-2 flex flex-col justify-start">
                    <label htmlFor="category">Select a Category</label>
                    {categories && categories.length > 0 && (
                        <>
                            <select
                                defaultValue={product.category_id}
                                onChange={(e) => setData('category', e.target.value)}
                                className="w-80 rounded-lg bg-white py-1 ps-5 text-black"
                            >
                                {categories.map((c: any, ind: any) => (
                                    <option value={c.id} key={ind}>
                                        {c.name}
                                    </option>
                                ))}
                            </select>
                        </>
                    )}
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
