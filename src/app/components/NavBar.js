"use client";

import React, { useState } from "react";
import {
  MdCalendarMonth,
  MdOutlineClose,
  MdOutlineLanguage,
  MdOutlineMenu,
  MdOutlinePerson,
  MdOutlineShoppingBag,
} from "react-icons/md";
import Link from "next/link";

const NavBar = ({ shopName }) => {
  const [isLanguage, setIsLanguage] = useState(false);
  const [isMegaMenu, setIsMegaMenu] = useState(false);
  const [isCart, setIsCart] = useState(false);
  const [isCalendar, setIsCalendar] = useState(false);
  const [openSection, setOpenSection] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [isInputClicked, setIsInputClicked] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputClick = () => {
    setIsInputClicked(true);
  };

  const handleCancel = () => {
    setInputValue("");
    setIsInputClicked(false);
  };

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };
  const toggleLanguage = () => {
    setIsLanguage(!isLanguage);
  };

  const toggleMegaMenu = () => {
    setIsMegaMenu(!isMegaMenu);
  };
  const toggleCartMenu = () => {
    setIsCart(!isCart);
  };
  const toggleCalendarMenu = () => {
    setIsCalendar(!isCalendar);
  };
  // const handleClick = (e, index) => {
  //   setItem({ name: e.target.textContent.toLowerCase() });
  //   setActive(index);
  // };

  return (
    <>
      <nav
        id="header"
        className="sticky top-0 bg-white dark:bg-gray-800 z-30  pt-4"
      >
        <div className="w-full  items-center px-2 ">
          <div className=" flex flex-row gap-4 items-center justify-between whitespace-nowrap ">
            <div className="flex gap-0 items-center ">
              <button className="p-2 " onClick={toggleMegaMenu}>
                <MdOutlineMenu className="w-4 sm:w-6 h-auto dark:text-gray-200 text-gray-800" />
              </button>
              {isMegaMenu && (
                <div
                  onClick={() => setIsMegaMenu(false)}
                  className="absolute left-4 sm:left-10 z-20 w-full py-0 mt-6 sm:mt-0   rounded-md shadow-xl dark:bg-gray-400 transition transform ease-out duration-100 scale-90 h-screen sm:h-auto custom-hr-scroll overflow-y-scroll"
                  style={{ top: "4rem", transformOrigin: "top left" }} // Fixed position with top and transformOrigin
                >
                  <div>
                    <div className="sm:p-4 p-2  text-gray-600 dark:text-gray-300 whitespace-nowrap">
                      <h3 className="text-gray-600 dark:text-gray-300 font-bold">
                        Delivered to You
                      </h3>
                      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4  sm:px-4 py-2 text-sm border-b text-gray-600 dark:text-gray-300">
                        <div className="block sm:px-8 px-2 sm:py-2 py-0 text-sm dark:text-gray-300">
                          <h3 className="text-gray-500 dark:text-gray-300 font-bold">
                            Wearables
                          </h3>
                          <div className="flex flex-col gap-2  py-2">
                            <p className="cursor-pointer px-4 transition-colors duration-300 transform hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                              Men&apos;s Clothing
                            </p>
                            <p className="cursor-pointer px-4 transition-colors duration-300 transform hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                              Women&apos;s Clothing
                            </p>
                            <p className="cursor-pointer px-4 transition-colors duration-300 transform hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                              Kids&apos;s Clothing
                            </p>
                            <p className="cursor-pointer px-4 transition-colors duration-300 transform hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                              Footwear
                            </p>
                            <p className="cursor-pointer px-4 transition-colors duration-300 transform hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                              Accessories
                            </p>
                          </div>
                        </div>

                        <div className="block sm:px-8 px-2 sm:py-2 py-0 text-sm text-gray-600 dark:text-gray-300">
                          <h3 className="text-gray-500 dark:text-gray-300 font-bold">
                            Foods
                          </h3>
                          <div className="flex flex-col gap-2 py-2">
                            <p className="cursor-pointer px-4 transition-colors duration-300 transform hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                              Cooked Foods
                            </p>
                            <p className="cursor-pointer px-4 transition-colors duration-300 transform hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                              Sweets & Desserts
                            </p>
                            <p className="cursor-pointer px-4 transition-colors duration-300 transform hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                              Cakes & Bakes
                            </p>
                            <p className="cursor-pointer px-4 transition-colors duration-300 transform hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                              Grocery
                            </p>
                            <p className="cursor-pointer px-4 transition-colors duration-300 transform hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                              Drinks
                            </p>
                          </div>
                        </div>

                        <div className="block sm:px-8 px-2 sm:py-2 py-0 text-sm text-gray-600 dark:text-gray-300">
                          <h3 className="text-gray-500 dark:text-gray-300 font-bold">
                            Furnitures
                          </h3>
                          <div className="flex flex-col gap-2 py-2">
                            <p className="cursor-pointer px-4 transition-colors duration-300 transform hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                              Home Furnitures
                            </p>
                            <p className="cursor-pointer px-4 transition-colors duration-300 transform hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                              Office Furnitures
                            </p>
                            <p className="cursor-pointer px-4 transition-colors duration-300 transform hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                              Bathroom Furnitures
                            </p>
                            <p className="cursor-pointer px-4 transition-colors duration-300 transform hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                              Decor Items
                            </p>
                          </div>
                        </div>

                        <div className="block sm:px-8 px-2 sm:py-2 py-0 text-sm text-gray-600 dark:text-gray-300">
                          <h3 className="text-gray-500 dark:text-gray-300 font-bold">
                            Electronics
                          </h3>
                          <div className="flex flex-col gap-2 py-2">
                            <p className="cursor-pointer px-4 transition-colors duration-300 transform hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                              Home Appliances
                            </p>
                            <p className="cursor-pointer px-4 transition-colors duration-300 transform hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                              Office Appliances
                            </p>
                            <p className="cursor-pointer px-4 transition-colors duration-300 transform hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                              Gadgets
                            </p>
                            <p className="cursor-pointer px-4 transition-colors duration-300 transform hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                              Accessories
                            </p>
                          </div>
                        </div>

                        <div className="block sm:px-8 px-2 sm:py-2 py-0 text-sm text-gray-600 dark:text-gray-300">
                          <h3 className="text-gray-500 dark:text-gray-300 font-bold">
                            Computers & Accessories
                          </h3>
                          <div className="flex flex-col gap-2 py-2">
                            <p className="cursor-pointer px-4 transition-colors duration-300 transform hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                              Desktop PC
                            </p>
                            <p className="cursor-pointer px-4 transition-colors duration-300 transform hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                              Laptops
                            </p>
                            <p className="cursor-pointer px-4 transition-colors duration-300 transform hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                              Tablets
                            </p>
                            <p className="cursor-pointer px-4 transition-colors duration-300 transform hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                              Accessories
                            </p>
                          </div>
                        </div>
                        <div className="block sm:px-8 px-2 sm:py-2 py-0 text-sm text-gray-600 dark:text-gray-300">
                          <h3 className="text-gray-500 dark:text-gray-300 font-bold">
                            Mobiles & Accessories
                          </h3>
                          <div className="flex flex-col gap-2 py-2">
                            <p className="cursor-pointer px-4 transition-colors duration-300 transform hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                              Mobile Phones
                            </p>
                            <p className="cursor-pointer px-4 transition-colors duration-300 transform hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                              Gadgets
                            </p>

                            <p className="cursor-pointer px-4 transition-colors duration-300 transform hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                              Accessories
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 text-gray-600 whitespace-nowrap dark:text-gray-300 ">
                      <h3 className="text-gray-600 dark:text-gray-300 font-bold">
                        Bookings & Appointments
                      </h3>
                      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4  sm:px-8 py-2 text-sm border-b text-gray-600 dark:text-gray-300">
                        <div className="block sm:px-8 px-2 sm:py-2 py-0 text-sm  text-gray-600 dark:text-gray-300">
                          <h3 className="text-gray-500 dark:text-gray-300 font-bold">
                            Service Bookings
                          </h3>
                          <div className="flex flex-col gap-2  py-2">
                            <p className="cursor-pointer px-4 transition-colors duration-300 transform hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                              Repair & Maintainence
                            </p>
                            <p className="cursor-pointer px-4 transition-colors duration-300 transform hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                              Home Maintainence
                            </p>
                            <p className="cursor-pointer px-4 transition-colors duration-300 transform hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                              Cleaning & Gardening
                            </p>
                            <p className="cursor-pointer px-4 transition-colors duration-300 transform hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                              Plumbing
                            </p>
                            <p className="cursor-pointer px-4 transition-colors duration-300 transform hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                              Physiotherapy
                            </p>
                            <p className="cursor-pointer px-4 transition-colors duration-300 transform hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                              Beauty & Grooming
                            </p>
                          </div>
                        </div>

                        <div className="block sm:px-8 px-2 sm:py-2 py-0 text-sm  text-gray-600 dark:text-gray-300">
                          <h3 className="text-gray-500 dark:text-gray-300 font-bold">
                            Holidays
                          </h3>
                          <div className="flex flex-col gap-2  py-2">
                            {/* <p className="cursor-pointer px-4 transition-colors duration-300 transform hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                            Ticketing
                          </p> */}
                            <p className="cursor-pointer px-4 transition-colors duration-300 transform hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                              Hotels
                            </p>
                            <p className="cursor-pointer px-4 transition-colors duration-300 transform hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                              Travels & Tours
                            </p>
                          </div>
                        </div>
                        <div className="block sm:px-8 px-2 sm:py-2 py-0 text-sm  text-gray-600 dark:text-gray-300">
                          <h3 className="text-gray-500 dark:text-gray-300 font-bold">
                            Appointments
                          </h3>
                          <div className="flex flex-col gap-2  py-2">
                            <p className="cursor-pointer px-4 transition-colors duration-300 transform hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                              Hospitals
                            </p>
                            <p className="cursor-pointer px-4 transition-colors duration-300 transform hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                              Pharmacy
                            </p>
                            <p className="cursor-pointer px-4 transition-colors duration-300 transform hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                              Dentists
                            </p>
                            <p className="cursor-pointer px-4 transition-colors duration-300 transform hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                              Beauty Parlour
                            </p>
                            <p className="cursor-pointer px-4 transition-colors duration-300 transform hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                              Salons
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <Link
                className="flex gap-0  tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl "
                href="#"
              >
                {/* <svg
                  className="fill-current text-gray-800 "
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M5,22h14c1.103,0,2-0.897,2-2V9c0-0.553-0.447-1-1-1h-3V7c0-2.757-2.243-5-5-5S7,4.243,7,7v1H4C3.447,8,3,8.447,3,9v11 C3,21.103,3.897,22,5,22z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v1H9V7z M5,10h2v2h2v-2h6v2h2v-2h2l0.002,10H5V10z" />
                </svg> */}
                <div className="mt-0 text-lg sm:text-xl text-gray-800 dark:text-gray-200">
                  {shopName ? (
                    shopName
                  ) : (
                    <div className="flex">
                      <span>#</span>
                      <span className="hidden md:inline-block">Hashtags</span>
                    </div>
                  )}
                  {/* City Commerce */}
                </div>
              </Link>
            </div>
            <div className=" w-full flex justify_between items-center">
              <div className="relative w-full md:mr-0 mb-2 md:mb-0">
                <div className="flex items-center">
                  <div className="relative flex-grow">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-500 dark:text-gray-200"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="search-bar"
                      className="bg-gray-50 dark:bg-gray-600 border border-gray-300 dark:border-gray-400 text-gray-900 dark:text-gray-200 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 px-2 py-1"
                      placeholder="# products, @ shops"
                      value={inputValue}
                      onChange={handleInputChange}
                      onClick={handleInputClick}
                    />
                    {isInputClicked && !inputValue && (
                      <div
                        className="absolute left-0 top-full p-2 bg-gray-100 dark:bg-gray-700 rounded shadow z-50
                      w-screen hidden lg:block lg:w-full lg:left-0 lg:right-0"
                      >
                        <p>Suggestions go here</p>
                      </div>
                    )}
                  </div>
                  {isInputClicked && (
                    <button
                      className="ml-2 px-4 py-1 bg-white dark:bg-gray-800 dark:text-white text-black rounded"
                      onClick={inputValue ? () => {} : handleCancel}
                    >
                      {inputValue ? "Submit" : "Cancel"}
                    </button>
                  )}
                </div>
              </div>
              {isInputClicked && !inputValue && (
                <div
                  className="absolute left-0 top-full p-2 bg-gray-100 dark:bg-gray-700 rounded shadow z-50
                      w-screen lg:w-full lg:hidden lg:left-0 lg:right-0"
                >
                  <p>Suggestions go here</p>
                </div>
              )}
              <div className="flex flex-row gap-0 items-center">
                {/* <button
                  className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 text-gray-800 rounded-full border-2 border-transparent hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
                  aria-label="Calendar"
                  onClick="#"
                >
                  <MdCalendarMonth className="w-6 h-6 " />
                  <span className="absolute inset-0 flex items-center justify-center  -mr-7 bg-gray-600 text-white rounded-full w-6 h-6 ">
                    <span className="text-xs sm:text-sm">6</span>
                  </span>
                </button>

                <button
                  className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 text-gray-800 rounded-full border-2 border-transparent hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
                  aria-label="Cart"
                  onClick="#"
                >
                  <MdOutlineShoppingBag className="w-6 h-6 " />
                  <span className="absolute inset-0 flex items-center justify-center  -mr-7 bg-gray-600 text-white rounded-full w-6 h-6 ">
                    <span className="text-xs sm:text-sm">6</span>
                  </span>
                </button> */}

                <button
                  className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 text-gray-800 rounded-full border-2 border-transparent hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
                  aria-label="Profile"
                >
                  <MdOutlinePerson className="w-6 h-6 text-gray-800 dark:text-gray-200 " />
                </button>

                <div className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 text-gray-800 rounded-full border-2 border-transparent hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out">
                  <button
                    onClick={toggleLanguage}
                    className="absolute top-0 right-0 z-20 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border-2 border-transparent hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
                    aria-label="Language"
                  >
                    <MdOutlineLanguage className="w-6 h-6 text-gray-800 dark:text-gray-200 " />
                  </button>

                  {isLanguage && (
                    <div
                      onClick={() => setIsLanguage(false)}
                      className="absolute right-0 top-10 z-20 w-28 py-0 mt-0 origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800 transition transform ease-out duration-100 scale-90"
                    >
                      <Link
                        href="#"
                        className="block px-8 py-2 text-sm text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        English
                      </Link>

                      <hr className="border-gray-200 dark:border-gray-700" />

                      <Link
                        href="#"
                        className="block px-8 py-2 text-sm text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        नेपाली
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
