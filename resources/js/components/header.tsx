import { Link, usePage } from "@inertiajs/react";

export default function Header(){
    const { url } = usePage();
    return (
        <div className="text-black w-full bg-gray-800 h-20">
            <div className="w-2/3 mx-auto h-full  flex justify-between items-center">
            <div className="w-20 h-20 flex justify-center items-center">
                <img src={`${window.location.origin}/storage/images/logo.png`} alt="" className="w-12" />
            </div>
            <div className="flex gap-3">
                <Link href={route("dashboard")} className={`${url === "/dashboard" ? "text-white font-extrabold" : "text-gray-500"}  hover:text-white duration-300`}>Dashboard</Link>
                <Link href={route("table.index")} className={`${url === "/table" ? "text-white font-extrabold " : "text-gray-500"} hover:text-white duration-300`}>Tables</Link>
                <Link href={route("category.index")} className={`${url === "/category" ? "text-white font-extrabold" : "text-gray-500"} hover:text-white duration-300`}>Categories</Link>
                <Link href={route("product.index")} className={`${url === "/product" ? "text-white font-extrabold" : "text-gray-500"} hover:text-white duration-300`}>Products</Link>
                <Link href={route("order.index")} className={`${url === "/order" ? "text-white font-extrabold" : "text-gray-500"} hover:text-white duration-300`}>Orders</Link>
            </div>
            </div>
        </div>
    )
}
