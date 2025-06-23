import DashLayout from '@/layouts/dash-layout';
import { Link } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <DashLayout title="Dashboard">
            <Link
                className="rounded-lg border-1 border-white px-3 py-3 text-white duration-300 hover:bg-white hover:text-black"
                href={route('categories.index')}
            >
                Categories
            </Link>
            <Link
                href={route('products.index')}
                className="ms-3 rounded-lg border-1 border-white px-3 py-3 text-white duration-300 hover:bg-white hover:text-black"
            >
                Products
            </Link>
        </DashLayout>
    );
}
