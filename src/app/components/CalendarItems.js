import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

import {
  MdOutlineAddHome,
  MdOutlineDelete,
  MdOutlineArrowCircleRight,
} from "react-icons/md";
import { FaCoins } from "react-icons/fa";

import Link from "next/link";
import QuantityInput from "./QuantityInput";
const CalendarItems = () => {
  return (
    <div className="flex flex-row py-5 gap-3 md:gap-5 border-b ">
      {/* IMAGE START */}
      <div className="shrink-0   w-full  h-auto sm:w-screen max-w-[60px] ">
        <img
          className="hover:grow hover:shadow-lg"
          src="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
        />
      </div>

      <div className="w-full flex flex-col">
        <div className="flex md:flex-row justify-between ">
          {/* PRODUCT TITLE */}
          <div className="text-md md:text-2xl font-semibold text-gray-800 dark:text-gray-200 whitespace-wrap">
            Service 1
          </div>

          {/* PRODUCT PRICE */}
          <div className="flex gap-4 items-center">
            <div className="text-sm md:text-md font-bold text-gray-800 dark:text-gray-200  whitespace-nowrap">
              Rs. 36
            </div>
            <MdOutlineDelete
              onClick=""
              className="cursor-pointer text-gray-800 dark:text-gray-200 hover:text-black text-[16px] md:text-[20px]"
            />
          </div>
        </div>

        {/* PRODUCT SUBTITLE */}
        <div className="text-[12px] font-normal text-gray-400 hidden md:block">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div className="flex justify-between items-center">
          <Link href={`/urban-furnishings`} className="sm:mt-1 mt-2 ">
            <div className="flex items-center gap-1">
              <MdOutlineAddHome className="text-gray-600 dark:text-gray-200" />
              <p className="leading-4 text-xs sm:text-sm text-gray-600 dark:text-gray-200 mt-1">
                Urban Furnishings
              </p>
            </div>
          </Link>
          {/* <div className="flex items-center gap-1 ">
            <QuantityInput count={1} />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CalendarItems;
