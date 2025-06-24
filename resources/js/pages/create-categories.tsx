import DashLayout from '@/layouts/dash-layout';
import { Link, useForm } from '@inertiajs/react';
import { FaArrowLeft } from 'react-icons/fa6';

export default function CreateCategories() {
    const {data, setData, post} = useForm<any>({
        name: "",
        image: undefined,
    })
    const handleSubmit = (e:any) => {
        e.preventDefault()
        post(route("category.store"), {
            onFinish: () => {
                data.name = ""
            }
        })
    }
    return (
        <DashLayout title="Create Categories">
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

            <form onSubmit={e => handleSubmit(e)} className="mt-5" encType='multipart-formdata'>
                <div className="flex flex-col">
                    <label htmlFor="name">Category Name</label>
                    <input id="name" value={data.name} onChange={(e:any) => setData("name", e.target.value)} className="w-80 rounded-lg bg-white py-1 ps-3 text-black" />
                </div>
                <div className="mt-2 flex flex-col justify-start">
                    <label htmlFor="pic">Select a Picture</label>
                    <input type="file" id="pic" className="w-80 rounded-lg bg-white py-1 ps-5 text-black" />
                </div>
                <button type='submit' className="mt-3 cursor-pointer rounded-lg bg-blue-500 px-3 py-1 text-sm font-extrabold text-white hover:bg-blue-400">
                    Create
                </button>
            </form>
        </DashLayout>
    );
}
