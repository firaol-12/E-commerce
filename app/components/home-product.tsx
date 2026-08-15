import Image from "next/image"

import img1 from "../assets/product/1.png"
import img2 from "../assets/product/2.png"
import img3 from "../assets/product/3.png"
import img4 from "../assets/product/4.png"
import img5 from "../assets/product/5.png"
import img6 from "../assets/product/6.png"
import img7 from "../assets/product/7.png"
import img8 from "../assets/product/8.png"

export default function HomeProduct() {
  const product = [
    {
      id: 1,
      name: "Nike Air Max",
      price: 120,
      rating: 4.5,
      img: img1,
    },
    {
      id: 2,
      name: "Adidas Ultraboost",
      price: 150,
      rating: 3,
      img: img2,
    },
    {
      id: 3,
      name: "Nike Revolution",
      price: 90,
      rating: 5,
      img: img3,
    },
    {
      id: 4,
      name: "Nike Air Max",
      price: 120,
      rating: 4.5,
      img: img4,
    },
    {
      id: 5,
      name: "Adidas Ultraboost",
      price: 150,
      rating: 3,
      img: img5,
    },
    {
      id: 6,
      name: "Nike Revolution",
      price: 90,
      rating: 5,
      img: img6,
    },
    {
      id: 7,
      name: "Adidas Ultraboost",
      price: 150,
      rating: 3,
      img: img7,
    },
    {
      id: 8,
      name: "Nike Revolution",
      price: 90,
      rating: 5,
      img: img8,
    },
  ]

  return (
    <div className="">
      <h3 className=" mt-5 ml-25">Get Products</h3>
      <h2 className=" ml-25 text-4xl">Explore our Products</h2>

      <div className="relative flex justify-center items-center flex-wrap  gap-12 mx-30 my-5">
        {product.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-start gap-2 justify-center w-68 h-90 mb-10"
          >
            <div>
              <Image
                src={item.img}
                alt={item.name}
                className="object-cover"
              />
            </div>

            <h3>{item.name}</h3>
            <div className="flex justify-between w-full items-center"> 
                <div className="flex flex-col">
                    <p>${item.price}</p>
                    <p>⭐⭐⭐⭐⭐ {item.rating}</p>

                </div>
                <button className="bg-amber-400 rounded-2xl w-10 h-10 flex justify-center items-center">
                    <img src="/shopping-cart.png" className="w-7 h-7" alt="" />
                </button>
            </div>
          </div>
        ))}
        <div className="flex justify-center items-center w-full">
            <button className="bg-amber-400 rounded-full flex justify-center items-center absolute bottom-2 text-white  px-6 py-2 ">View More</button>
        </div>

      </div>
    </div>
  )
}