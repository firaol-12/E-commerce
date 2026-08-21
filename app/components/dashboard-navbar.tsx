import Link from "next/link"
import Image from "next/image"
import img1 from "../assets/search.png"
import cart_img from "../assets/shopping-cart.png"
import like from "../assets/heart.png"
import user from "../assets/user (1).png"

export default function DashNavbar() {
  return (
    <nav className=" bg-white z-100 fixed top-0 right-0 w-4/5 h-15 flex items-center justify-between px-27  py-5 shadow-md">
      <h1 className="text-2xl font-bold">
        Hello sir
      </h1>

      <div className="flex items-center justify-center w-70 h-9 py-2 rounded-full bg-gray-100 border-gray-300 border-2">
      <input className="w-60 h-8 px-5  rounded-full" type="text" />
      <button className="w-10 z-20 h-9 flex justify-center items-center cursor-pointer">
        <Image src={img1} alt="" className="w-5 h-5" />
      </button>
      </div>

      <div className="flex justify-center items-center gap-5">


        <Link className="flex justify-center items-center gap-5" href="">
          <Image src={user} alt="" className="w-6 h-6"></Image>
          <span className="comfortaa text-lg">Firaol</span>
        </Link>
      </div>
    </nav>
  )
}