import Image from "next/image"
import img from "../assets/product/4.png"
import like from "../assets/heart.png"
import add from "../assets/plus.png"
import minus from "../assets/minus.png"
export default function SingleProduct (){
    return(
        <div className=" flex my-5 w-full h-screen justify-center items-center">
            <div className="w-3/7 h-full relative">
                <Image 
                    className="object-cover w-full h-full"
                    alt=""
                    src={img}
                />
                <button>
                    <Image src={like} alt="" className="absolute top-4 right-4 w-7 h-7" />
                </button>
            </div>

            <div className="flex flex-col pl-20 justify-center items-start w-3/7 h-full">
                <div className="flex flex-col justify-center items start">
                    <h3 className="mb-5 text-gray-500 ">New Collection</h3>
                    <h1 className="text-5xl">CH07 Shell Hat</h1>
                    <h1 className="text-4xl mt-2 text-gray-500">White</h1>
                </div>

                <div className="my-5">
                    <h3>8 Reviews</h3>
                </div>

                <div className=" my-2 flex justify-between items-center w-100">
                    <div className="flex flex-col justify-center items start gap-4">
                        <h3>Price</h3>
                        <h1 className="text-5xl text-orange-500">$59.00</h1>
                    </div>

                    <div className="flex flex-col justify-center items start gap-4">
                        <h3>Quantity</h3>
                        <div className="flex justify-around items-center w-50 h-10 bg-gray-200 rounded-4xl shadow-[inset_0_2px_6px_rgba(0,0,0,0.25)]">
                            <button className="bg-white rounded-full w-7 h-7 flex justify-center items-center text-2xl">
                                {/* <Image src={add} alt="" className="w-10 h-10"></Image> */}
                                -
                            </button>
                                <span className="text-2xl" >2</span>
                            <button className="bg-white rounded-full w-7 h-7 flex justify-center items-center text-2xl">
                                {/* <Image src={minus} alt="" className="w-10 h-10"></Image> */}
                                +
                            </button>
                        </div>
                    </div>

                </div>

                <div className="my-4">
                    <div className="flex justify-between items-center w-100 h-10  shadow border border-gray-200 rounded-full">
                        <button className="w-1/2 h-10 rounded-4xl text-gray-500 flex justify-center items-center">Description</button>
                        <button className="w-1/2 h-10  bg-amber-300  rounded-4xl text-white flex justify-center items-center">Detail</button>
                    </div>
                    <div className="w-full flex gap-8 my-5 text-gray-500">
                        <div className="flex flex-col">
                            <h4>Size</h4>
                            <h4>Brand</h4>
                            <h4>Color</h4>
                            <h4>Material</h4>
                            <h4>Style</h4>
                        </div>

                        <div className="flex flex-col">
                            <h4>Medium</h4>
                            <h4>FashionHub</h4>
                            <h4>Brown, Black, White</h4>
                            <h4>Premium Cotton</h4>
                            <h4>Casual, Modern, Classic</h4>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-7">
                    <div className="flex flex-col gap-1 text-gray-500">
                        <h4>Total Price</h4>
                        <h2 className="text-3xl">$120.00</h2>
                    </div>

                    <button className="w-50 h-12 flex justify-center items-center rounded-full text-white bg-amber-300">
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    )
}