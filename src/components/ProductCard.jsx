import { FaStar } from "react-icons/fa";

const ProductCard = ({ image, title, category, price, rating }) => {
  return (
    <div className="bg-white rounded-xl h-full flex flex-col font-lato shadow-around hover:shadow-hover hover:scale-102 duration-300">
      <div className="flex items-center justify-center">
        <img src={image} alt="ProductImage" className="rounded-t-xl my-5 size-48 object-contain mx-auto" />
      </div>
      <div className="p-4 flex flex-col h-full">
        <p className="text-[#111827] text-lg font-semibold">{title || "Untitled Product"}</p>
        <p className="text-[#6B7280]">{category || "Uncategorized"}</p>
        <p className="text-[#E11D48] text-xl font-bold mt-3 mb-5">${price || "Unavailable"}</p>
        <div className="flex justify-end items-center gap-2 mt-auto">
          <FaStar className="text-[#FACC15]" />
          <p>{rating || "Unrated"}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard