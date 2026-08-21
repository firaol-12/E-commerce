import Link from "next/link";
import Image from "next/image";

export default function Sidebar(){
    return(
        <div className=" bg-white flex flex-col justify-start items-start fixed top-0 left-0 bottom-0 w-1/5 pl-15 text-gray-600 pt-5 gap-5 shadow-2xl bg">
            <span className="text-4xl archivo text-orange-600 mb-5">My Shop</span>
            <Link className="" href="../dashboard/">Dashboard</Link>
            <Link className="" href="../dashboard/customers">Customers</Link>
            <Link className="" href="../dashboard/Products">Products</Link>
            <Link className="" href="../dashboard/orders">Orders</Link>
        </div>
    )
}