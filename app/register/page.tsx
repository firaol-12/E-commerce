import Image from "next/image"
import Link from "next/link"
import img from "../assets/register.svg"
import icon from "../assets/search (1).png"

export default function Register() {
    return(
        <div className="flex justify-center items-center w-full h-screen">
            <div className=" bg-gray-200 flex justify-around items-center rounded-2xl w-200 h-110 shadow-2xl">
                <div className="w-90 flex justify-center items-center">
                    <Image src={img} alt="" className="w-80 h-80" /> 
                </div>
                <div className="w-90 flex justify-center items-center">
                    <form action="" className="flex flex-col gap-4">
                        <button className="w-70 px-5 py-2 text-black border border-gray-400 rounded-2xl flex items-center justify-center gap-4">
                            <Image src={icon} alt="Google" className="w-5 h-5" />
                            <span>Continue with Google</span>
                        </button>
                        <p className=" text-center ">Or</p>
                        <input placeholder="Full Name" className="w-70 px-5 py-2 border border-gray-400 rounded-2xl" type="text" />
                        <input placeholder="Email" className="w-70 px-5 py-2 border border-gray-400 rounded-2xl" type="email" />
                        <input placeholder="Password" className="w-70 px-5 py-2 border border-gray-400 rounded-2xl" type="password" />
                        <button className="w-70 px-5 py-2 bg-blue-600 text-white rounded-2xl">Submit</button>
                        <div className="flex justify-center items-center gap-1">
                            <span>Already have an account?</span>
                            <Link href="./login" className="text-blue-600 text-center">
                                Login
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
