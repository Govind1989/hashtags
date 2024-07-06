"use client";
import React, { useState } from "react";
import { FaCoins } from "react-icons/fa";
import {
  MdCalendarMonth,
  MdOutlineAdd,
  MdOutlineArrowCircleRight,
  MdOutlineClose,
  MdOutlineShoppingBag,
} from "react-icons/md";
import CartItems from "./CartItems";
import Cart from "./Cart";

const SideBarMobile = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isCart, setIsCart] = useState(false);
  const [isCalendar, setIsCalendar] = useState(false);
  const [openSection, setOpenSection] = useState(0);
  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const toggleCartMenu = () => {
    setIsCart(!isCart);
  };
  const toggleCalendarMenu = () => {
    setIsCalendar(!isCalendar);
  };

  const toggleSideBar = () => {
    if (!isCart) {
      setIsSideBarOpen(!isSideBarOpen);
    }
  };
  return (
    <div>
      <div className="flex flex-col-reverse gap-4 md:hidden fixed bottom-5 right-2 z-20">
        <button
          className=" bg-gray-800 text-white bg-opacity-60 backdrop-blur-sm rounded-full p-3 shadow-lg"
          onClick={toggleSideBar}
          aria-label="Open Sidebar"
        >
          {isSideBarOpen ? (
            <MdOutlineClose className="w-6 h-6" />
          ) : (
            <MdOutlineAdd className="w-6 h-6" />
          )}
        </button>
        {/* cart button */}
        <button
          className={`${
            isSideBarOpen ? "block" : "hidden"
          } bg-white bg-opacity-20 dark:bg-gray-800 dark:bg-opacity-20 backdrop-blur-sm py-2 px-2 shadow-lg md:shadow-none shadow-gray-600   relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 text-gray-800 rounded-md border-2 border-transparent hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out`}
          aria-label="Calendar"
          onClick={toggleCalendarMenu}
        >
          <MdCalendarMonth className="w-6 h-6 sm:w-8 sm:h-8 dark:text-gray-200" />
          <span className="absolute inset-0 flex items-center justify-center -mt-4 -mr-7 bg-gray-600 text-white rounded-full w-6 h-6 sm:w-8 sm:h-8">
            <span className="text-xs sm:text-sm">2</span>
          </span>
        </button>
        {/* calendar button */}
        <button
          className={`${
            isSideBarOpen ? "block" : "hidden"
          } bg-white bg-opacity-20 dark:bg-gray-800 dark:bg-opacity-20 backdrop-blur-sm py-2 px-2 shadow-lg md:shadow-none shadow-gray-600   relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 text-gray-800 rounded-md border-2 border-transparent hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out`}
          aria-label="Cart"
          onClick={toggleCartMenu}
        >
          <MdOutlineShoppingBag className="w-6 h-6 sm:w-8 sm:h-8 dark:text-gray-200" />
          <span className="absolute inset-0 flex items-center justify-center -mt-4 -mr-7 bg-gray-600 text-white rounded-full w-6 h-6 sm:w-8 sm:h-8">
            <span className="text-xs sm:text-sm">3</span>
          </span>
        </button>
      </div>
      <Cart isCart={isCart} />
    </div>
  );
};

export default SideBarMobile;
