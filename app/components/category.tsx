import Image from "next/image"
import img1 from "../assets/1.png"
import img2 from "../assets/2.png"
import img3 from "../assets/3.png"

export default function Category() {
  return (
    <div className="flex flex-col items-start justify-start">
      <h3 className=" mt-5 ml-25">Categories</h3>
      <h2 className=" ml-25 text-4xl">Browse by Category</h2>

      <div className=" my-5 flex items-center justify-center gap-4 w-full">
        <div>
          <Image
            className="h-[150px] w-[430px] rounded-2xl object-cover shadow-xl hover:shadow-2xl"
            src={img1}
            alt="Category 1"
          />
        </div>

        <div>
          <Image
            className="h-[150px] w-[430px] rounded-2xl object-cover shadow-xl hover:shadow-2xl"
            src={img2}
            alt="Category 2"
          />
        </div>

        <div>
          <Image
            className="h-[150px] w-[430px] rounded-2xl object-cover shadow-xl hover:shadow-2xl"
            src={img3}
            alt="Category 3"
          />
        </div>
      </div>
    </div>
  )
}