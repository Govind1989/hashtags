import React, { useState } from "react";
import Link from "next/link";
import {
  MdCalendarMonth,
  MdMoreHoriz,
  MdOutlineAddHome,
  MdOutlineShoppingBag,
} from "react-icons/md";

const Card = ({
  imageUrl,
  productName,
  markedPrice,
  sellingPrice,
  vendor,
  Discount,
}) => {
  const [addtoCart, setIAddToCart] = useState(false);
  const [showHoverContent, setShowHoverContent] = useState(false);

  const toggleHoverContent = () => {
    setShowHoverContent(!showHoverContent);
  };

  const toggleBagState = (e) => {
    e.preventDefault();
    setIAddToCart(!addtoCart);
  };

  return (
    <div className="block w-full">
      <div className="relative  min-h-50">
        <img
          className="rounded-md w-full h-auto "
          src={imageUrl}
          alt={productName}
        />
        <div
          className={`flex flex-col h-auto  justify-end absolute inset-0 bg-black  ${
            showHoverContent ? "opacity-70" : "opacity-10"
          } transition-opacity duration-300 rounded-lg px-2`}
        >
          <div
            className={`items-center justify-between  ${
              showHoverContent ? "flex" : "hidden"
            } flex-wrap`}
          >
            <Link
              href={`/products/product1`}
              className="leading-2 text-sm md:text-xl text-white sm:text-lg whitespace-normal px-0"
            >
              {productName}
            </Link>
            <div className="flex gap-2 rounded-lg  px-0 py-1 shadow-md">
              <div className="flex justify-between flex-col sm:flex-row items-center">
                <p className=" flex-nowrap">
                  <span className="sm:text-lg text-md font-bold text-white mr-2">
                    <span className="sm:text-md text-xs text-gray-200">
                      Rs.
                    </span>
                    {markedPrice}
                  </span>
                  <span className="text-[12px] text-white line-through ">
                    {sellingPrice}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div
            className={`absolute top-3 left-1 ${
              showHoverContent ? "flex" : "hidden"
            } rounded-lg py-1 items-center`}
          >
            <MdOutlineAddHome className=" text-white shadow-md whitespace-nowrap" />
            <p className="justify-end text-xs md:text-sm ml-1 mt-1 text-white">
              {vendor}
            </p>
          </div>
          <div
            className={`absolute top-3 right-1 ${
              showHoverContent ? "block" : "hidden"
            } rounded-lg px-0 py-1 items-center mt-[2px]`}
          >
            <div onClick={toggleBagState} className="cursor-pointer">
              <MdOutlineShoppingBag className="w-4 sm:w-6 h-auto text-white " />
            </div>
          </div>
        </div>

        {Discount && (
          <div
            className={`text-sm absolute top-3 right-0 ${
              showHoverContent ? "hidden" : "flex"
            } bg-gray-800 text-white py-1 px-2 rounded-tr-md rounded-bl-md font-bold`}
          >
            20% off
          </div>
        )}
      </div>
      <div className="no-space-y">
        <div onClick={toggleHoverContent} className="cursor-pointer">
          <MdMoreHoriz className="w-6 h-6 text-black" />
        </div>
      </div>
    </div>
  );
};

export default Card;
