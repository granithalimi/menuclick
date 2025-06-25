import DashLayout from '@/layouts/dash-layout';
import { Link } from '@inertiajs/react';
import { FaArrowLeft } from 'react-icons/fa6';

export default function ShowProduct({ product }: any) {
    return (
        <DashLayout title={product.name}>
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

            <div>
                <img className="mt-1 h-40 w-40 rounded-lg object-cover" src={`${window.location.origin}/storage/images/${product.pic}`} />
                <h1>Name: {product.name}</h1>
                <h1>Description: {product.description}</h1>
                <h1>Price: </h1>
            </div>
        </DashLayout>
    );
}
