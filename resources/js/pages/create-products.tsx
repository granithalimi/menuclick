import DashLayout from '@/layouts/dash-layout';
import { Link, useForm } from '@inertiajs/react';
import { FaArrowLeft } from 'react-icons/fa6';

export default function CreateProducts({ categories }: any) {
    const { data, setData, post } = useForm<any>({
        name: '',
        desc: '',
        price: 0,
        pic: null,
        category: undefined,
    });
    const handleSubmit = (e: any) => {
        e.preventDefault();
        post(route('product.store'), {
            onFinish: () => {
                data.name = '';
            },
        });
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

            <form onSubmit={(e) => handleSubmit(e)} className="mt-5" encType="multipart/form-data">
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
                    <input type="file" id="pic" onChange={(e:any) => setData("pic", e.target.files[0])} className="w-80 rounded-lg bg-white py-1 ps-5 text-black" />
                </div>
                <div className="mt-2 flex flex-col justify-start">
                    <label htmlFor="desc">Write a Description about the product</label>
                    <input type="text" id="desc" onChange={e => setData("desc", e.target.value)} className="w-80 rounded-lg bg-white py-1 ps-5 text-black" />
                </div>
                <div className="mt-2 flex flex-col justify-start">
                    <label htmlFor="price">Enter the price of the product</label>
                    <input type="number" step="0.01" inputMode='decimal' id="price" onChange={e => setData("price", e.target.value)} className="w-80 rounded-lg bg-white py-1 ps-5 text-black" />
                </div>
                <div className="mt-2 flex flex-col justify-start">
                    <label htmlFor="category">Select a Category</label>
                    {categories && categories.length > 0 && (
                        <>
                            <select onChange={e => setData("category", e.target.value)} className='bg-white w-80 rounded-lg text-black ps-5 py-1'>
                            <option value={undefined}>---</option>
                            {
                                categories.map((c:any, ind:any) => (
                                    <option value={c.id} key={ind}>{c.name}</option>
                                ))
                            }
                            </select>
                        </>
                    )}
                </div>
                <button
                    type="submit"
                    className="mt-3 cursor-pointer rounded-lg bg-blue-500 px-3 py-1 text-sm font-extrabold text-white hover:bg-blue-400"
                >
                    Create
                </button>
            </form>
        </DashLayout>
    );
}
