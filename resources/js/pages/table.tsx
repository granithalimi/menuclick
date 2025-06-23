import DashLayout from '@/layouts/dash-layout';
import { Link, useForm } from '@inertiajs/react';
import { FaArrowLeft } from 'react-icons/fa6';

export default function Table({ table }: any) {
    const {
        data,
        setData,
        put,
        delete: destroy,
    } = useForm({
        id: table.id,
        table_num: table.table_num,
    });

    const handleDelete = (e: any) => {
        e.preventDefault();
        destroy(route('table.destroy', data.id));
    };
    const handleUpdate = (e: any) => {
        e.preventDefault();
        put(route('table.update', data.id));
    };
    return (
        <DashLayout title={`Table/${table.table_num}`}>
            <Link
                href={route('table.index')}
                className="inline-flex items-center rounded-lg border-1 border-white px-3 py-3 text-white duration-300 hover:bg-white hover:text-black"
            >
                <FaArrowLeft />
                Tables
            </Link>
            <Link
                href={route('dashboard')}
                className="ms-3 rounded-lg border-1 border-white px-3 py-3 text-white duration-300 hover:bg-white hover:text-black"
            >
                Dashboard
            </Link>
            <div className="mt-10">
                <div>
                    <input
                        type="number"
                        value={data.table_num}
                        onChange={(e) => setData('table_num', e.target.value)}
                        className="mb-3 rounded-lg border-1 border-white py-1 ps-2"
                    />
                </div>

                <button onClick={(e) => handleDelete(e)} className="rounded-lg bg-red-500 px-3 py-1 font-bold">
                    Delete
                </button>
                <button onClick={(e) => handleUpdate(e)} className="rounded-lg bg-green-500 px-3 py-1 font-bold">
                    Update
                </button>
            </div>
        </DashLayout>
    );
}
