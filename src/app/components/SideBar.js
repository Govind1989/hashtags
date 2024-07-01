"use client";

import React, { useState } from "react";
import {
  MdCalendarMonth,
  MdOutlineShoppingBag,
  MdOutlinePerson,
  MdOutlineLanguage,
} from "react-icons/md";
import Link from "next/link";
const SideBar = () => {
  const [isLanguage, setIsLanguage] = useState(false);

  const toggleLanguage = () => {
    setIsLanguage(!isLanguage);
  };

  return (
    <div
      className="fixed md:left-right md:top-0  h-full flex flex-col gap-4 z-50  justify-end md:justify-start py-24 px-4  "
      id="nav-content"
    >
      <div className="  flex flex-col gap-4 md:gap-8 py-8 ">
        <button
          className=" bg-white p-2 shadow-lg md:shadow-none shadow-gray-600   relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 text-gray-800 rounded-md border-2 border-transparent hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
          aria-label="Calendar"
          onClick="#"
        >
          <MdCalendarMonth className="w-6 h-6 sm:w-8 sm:h-8" />
          <span className="absolute inset-0 flex items-center justify-center -mt-4 -mr-7 bg-gray-600 text-white rounded-full w-6 h-6 sm:w-8 sm:h-8">
            <span className="text-xs sm:text-sm">6</span>
          </span>
        </button>

        <button
          className=" bg-white p-2 shadow-lg md:shadow-none shadow-gray-600   relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 text-gray-800 rounded-md border-2 border-transparent hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
          aria-label="Cart"
          onClick="#"
        >
          <MdOutlineShoppingBag className="w-6 h-6 sm:w-8 sm:h-8" />
          <span className="absolute inset-0 flex items-center justify-center -mt-4 -mr-7 bg-gray-600 text-white rounded-full w-6 h-6 sm:w-8 sm:h-8">
            <span className="text-xs sm:text-sm">6</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
