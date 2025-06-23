import Header from '@/components/header';
import { Head } from '@inertiajs/react';

export default function DashLayout({ children, title }: any) {
    return (
        <div className="min-h-screen bg-gray-900">
            <Head title={title} />
            <Header />
            <div className="mx-auto w-2/3 pt-10">{children}</div>
        </div>
    );
}
