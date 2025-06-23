import DashLayout from '@/layouts/dash-layout';
import { Link } from '@inertiajs/react';

export default function Categories() {
    return (
        <DashLayout title="Categories">
            <Link
                href={route('dashboard')}
                className="ms-3 rounded-lg border-1 border-white px-3 py-3 text-white duration-300 hover:bg-white hover:text-black"
            >
                Dashboard
            </Link>
        </DashLayout>
    );
}
