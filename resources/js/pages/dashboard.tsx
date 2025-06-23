import DashLayout from '@/layouts/dash-layout';
import { Link } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <DashLayout title="Dashboard">
            <Link
                href={route('table.index')}
                className="rounded-lg border-1 border-white px-3 py-3 text-white duration-300 hover:bg-white hover:text-black"
            >
                Tables
            </Link>
            <Link
                className="ms-3 rounded-lg border-1 border-white px-3 py-3 text-white duration-300 hover:bg-white hover:text-black"
                href={route('categorie.index')}
            >
                Categories
            </Link>
            <Link
                href={route('product.index')}
                className="ms-3 rounded-lg border-1 border-white px-3 py-3 text-white duration-300 hover:bg-white hover:text-black"
            >
                Products
            </Link>
            <Link
                href={route('order.index')}
                className="ms-3 rounded-lg border-1 border-white px-3 py-3 text-white duration-300 hover:bg-white hover:text-black"
            >
                Orders
            </Link>
        </DashLayout>
    );
}
