import Link from "next/link"
import Image from "next/image"
import img1 from "../assets/search.png"
import cart_img from "../assets/shopping-cart.png"

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-27 py-2 shadow-md">
      <h1 className="text-2xl font-bold">
        MyShop
      </h1>

      <div className="flex items-center justify-center w-70 h-9 py-2 rounded-full bg-gray-100 border-gray-300 border-2">
      <input className="w-60 h-8 px-5  rounded-full" type="text" />
      <button className="w-10 z-20 h-9 flex justify-center items-center cursor-pointer">
        <Image src={img1} alt="" className="w-5 h-5" />
      </button>
      </div>

      <div className="flex justify-center items-center gap-2">
        <button className="px-2">Register</button>
        <button className="px-2">Login</button>
        <button className="rounded-full px-5 py-2">
          <Image src={cart_img}  className="w-7 h-7" alt="" />
        </button>
      </div>
    </nav>
  )
}