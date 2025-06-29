import DashLayout from '@/layouts/dash-layout';
import { Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function Orders({ orders }: any) {
    console.log(orders);
    const [order, setOrders] = useState<any>({});
    useEffect(() => {
        setOrders(orders);
    }, [orders]);
    return (
        <DashLayout title="Orders">
            <Link
                href={route('dashboard')}
                className="ms-3 rounded-lg border-1 border-white px-3 py-3 text-white duration-300 hover:bg-white hover:text-black"
            >
                Dashboard
            </Link>

            {order && order.length > 0 ? (
                <>
                    <h1 className="mt-5">Orders:</h1>
                    <div className="grid grid-cols-4 gap-3">
                        {order.map((o: any, ind: any) => (
                            <div key={ind} className="rounded-lg border-1 border-white p-3">
                                <h1>Table: #{o.table.table_num}</h1>
                                <div>
                                    Products: <br />
                                    {o.orders_products.map((p: any, ind: any) => (
                                        <div className='flex gap-1'>
                                            <h1>{p.products[0].name}</h1>
                                            <h1>qty:{p.qty}</h1>
                                        </div>
                                    ))}
                                </div>
                                <h1 className='text-yellow-400'>{o.status}</h1>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <h1 className="mt-5">No Orders yet :(</h1>
            )}
        </DashLayout>
    );
}
