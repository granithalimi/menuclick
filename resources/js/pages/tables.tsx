import DashLayout from '@/layouts/dash-layout';
import { Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function Tables({ tables }: any) {
    const [table, setTables] = useState<any>({});

    useEffect(() => {
        setTables(tables);
    }, [tables]);

    return (
        <DashLayout title="Tables">
            <Link
                href={route('dashboard')}
                className="rounded-lg border-1 border-white px-3 py-3 text-white duration-300 hover:bg-white hover:text-black"
            >
                Dashboard
            </Link>

            <div className="mt-8 mb-5">
                <Link href={route('table.create')} className="rounded-lg bg-blue-500 px-3 py-1 text-xl font-extrabold duration-300 hover:bg-blue-400">
                    Create a Table
                </Link>
            </div>

            {table && table.length > 0 && (
                <>
                    <div className="mb-5 text-3xl font-extrabold">Tables</div>
                    <div className="grid grid-cols-4">
                        {table.map((t: any, ind: any) => (
                            <div
                                key={ind}
                                className="mx-3 my-3 flex flex-col items-center gap-3 rounded-sm border-1 border-white py-3 text-center text-white duration-300"
                            >
                                <h1 className="text-xl font-extrabold">{t.table_num}</h1>
                                <div className="flex items-center justify-center gap-1">
                                    {/* <Link */}
                                    {/*     href={route("table.show", t.id)} */}
                                    {/*     className="cursor-pointer rounded-lg bg-green-500 px-3 py-1 text-sm font-extrabold text-white duration-300 hover:bg-green-400" */}
                                    {/* > */}
                                    {/*     Show Orders */}
                                    {/* </Link> */}
                                    <Link
                                        href={route('table.edit', t.id)}
                                        className="cursor-pointer rounded-lg bg-gray-500 px-3 py-1 text-sm font-extrabold text-white duration-300 hover:bg-gray-400"
                                    >
                                        Edit
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </DashLayout>
    );
}
