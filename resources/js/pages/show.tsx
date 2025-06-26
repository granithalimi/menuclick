import { Link } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function Show({products, table_id}:any){
    const [product, setProducts] = useState<any>({});
    useEffect(() => {
        setProducts(products);
    }, [products]);
    return (
        <div className="min-h-screen w-full bg-blue-100">
            {product && product.length > 0 && (
                <>
                    <h1 className="text-center text-2xl font-extrabold text-black">Products</h1>
                    <div className="grid grid-cols-2 md:grid-cols-4">
                        {product.map((p: any, ind: any) => (
                            <div
                                key={ind}
                                className="mx-3 my-3 flex flex-col items-center gap-3 rounded-sm border-1 border-black py-3 text-center text-white duration-300"
                            >
                                <img
                                    className="mt-1 h-10/12 w-10/12 rounded-lg object-cover"
                                    src={`${window.location.origin}/storage/images/${p.pic}`}
                                />
                                <h1 className="text-xl font-extrabold text-black">{p.name}</h1>
                                <h1 className="text-xl font-extrabold text-black">{p.desc}</h1>
                                <h1 className="text-xl font-extrabold text-black">${p.price}</h1>
                                <div className="flex items-center justify-center gap-1 text-black">
                                    <Link href="#" className="rounded-lg bg-blue-500 px-3 py-1 text-sm font-extrabold text-white">Show Product</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}

        </div>
    )
}
