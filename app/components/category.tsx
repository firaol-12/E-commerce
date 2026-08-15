import Image from "next/image"
import img1 from "../assets/sunglasses.png"
import img2 from "../assets/earrings.png"
import img3 from "../assets/cap.png"
import img4 from "../assets/running-shoes.png"
import img5 from "../assets/shirt.png"
import img6 from "../assets/dress-long-and-black-shape.png"

export default function Category() {

  const product = [
    {
      id:1,
      titel:"Glasses",
      img:img1
    },

    {
      id:2,
      titel:"Earrings",
      img:img2
    },

    {
      id:3,
      titel:"Hats and Cap",
      img:img3
    },

    {
      id:4,
      titel:"Shoes",
      img:img4
    },

    {
      id:5,
      titel:"Shirts",
      img:img5
    },

    {
      id:6,
      titel:"Dresses",
      img:img6
    },
  ]
  return (
    <div className="flex flex-col items-start justify-start">
      <h3 className=" mt-5 ml-25">Categories</h3>
      <h2 className=" ml-25 text-4xl">Browse by Category</h2>

      <div className=" my-5 flex items-center justify-center gap-10 w-full">
        {
          product.map((index)=>(
            <div 
            key={index.id}
            className="flex justify-around  items-center rounded-2xl shadow-xl hover:shadow-2xl w-45 h-20">
            <Image
              className="object-cover  w-10 h-10"
              src={index.img}
              alt="Category 1"
            />
            <p>{index.titel}</p>
          </div>
          ))
        }
        
      </div>
    </div>
  )
}