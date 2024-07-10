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
import Category from "./Category";
import ThemeToggle from "./ThemeToggle";

const NavBar = ({ slug }) => {
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
        className="sticky top-0 bg-white dark:bg-gray-800 z-20 pb-3"
      >
        <div className="w-full  items-center px-2 ">
          <div className=" flex flex-row gap-0 items-center justify-between md:gap-4 whitespace-nowrap ">
            <div className="flex gap-0 items-center ">
              <button className="p-2 " onClick={toggleMegaMenu}>
                <MdOutlineMenu className="w-4 sm:w-6 h-auto dark:text-gray-200 text-gray-800" />
              </button>
              {isMegaMenu && (
                <div
                  onClick={() => setIsMegaMenu(false)}
                  className="absolute left-4 sm:left-10 z-20 w-full py-0 mt-0 sm:mt-0 rounded-md shadow-xl dark:bg-gray-400 transition transform ease-out duration-100 scale-90 h-screen sm:h-auto custom-hr-scroll overflow-y-scroll md:overflow-hidden"
                  style={{ top: "3.25rem", transformOrigin: "top left" }} // Fixed position with top and transformOrigin
                >
                  <Category />
                </div>
              )}
              <Link
                className="flex gap-0  tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl "
                href="/"
              >
                <div className="mt-0 text-lg sm:text-xl text-gray-800 dark:text-gray-200">
                  {slug ? (
                    slug
                  ) : (
                    <div className="flex">
                      <span>#</span>
                      <span className="text-gray-800 dark:text-gray-200">
                        Hashtags
                      </span>
                    </div>
                  )}
                  {/* City Commerce */}
                </div>
              </Link>
            </div>
            <div className=" md:w-full flex justify_between items-center">
              <div className="relative w-full hidden md:block">
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
                      className="bg-gray-50 dark:bg-gray-600 border border-transparent text-gray-900 dark:text-gray-200 sm:text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 px-2 py-1 transition-colors duration-300"
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
                        <div className="flex flex-col">
                          <div className="block  pb-2 ">
                            <h3 className="text-heading sm:block  md:text-base   font-bold text-gray-400 text-sm">
                              Most Searched Products (#)
                            </h3>
                            <div class="flex justify-start text-xs font-semibold text-gray-600 gap-2 flex-wrap">
                              <span class="bg-gray-100 rounded-full px-3 py-1 ">
                                #Men&apos;s Clothings
                              </span>
                              <span class="bg-gray-100 rounded-full px-3 py-1 ">
                                #Formal Men&apos;s Wear
                              </span>
                              <span class="bg-gray-100 rounded-full px-3 py-1 ">
                                #Sports Wear
                              </span>
                              <span class="bg-gray-100 rounded-full px-3 py-1 ">
                                #Kid&apos;s Shoes
                              </span>
                              <span class="bg-gray-100 rounded-full px-3 py-1 ">
                                #Bridal Dresses
                              </span>
                              <span class="bg-gray-100 rounded-full px-3 py-1 ">
                                #Ethnic Wear for Men
                              </span>
                              <span class="bg-gray-100 rounded-full px-3 py-1 ">
                                #Ethnic Wear for Women
                              </span>
                            </div>
                          </div>
                          <div className="block  pb-2 ">
                            <h3 className="text-heading sm:block  md:text-base   font-bold text-gray-400 text-sm">
                              Most Searched Vendors (@)
                            </h3>
                            <div class="flex justify-start text-xs font-semibold text-gray-600 gap-2 flex-wrap">
                              <span class="bg-gray-100 rounded-full px-3 py-1 ">
                                @Urban Furnitures
                              </span>
                              <span class="bg-gray-100 rounded-full px-3 py-1 ">
                                @Akon Furnitures
                              </span>
                              <span class="bg-gray-100 rounded-full px-3 py-1 ">
                                @H&M Furnitures
                              </span>
                              <span class="bg-gray-100 rounded-full px-3 py-1 ">
                                @Urban Furnitures
                              </span>
                              <span class="bg-gray-100 rounded-full px-3 py-1 ">
                                @Akon Furnitures
                              </span>
                              <span class="bg-gray-100 rounded-full px-3 py-1 ">
                                @H&M Furnitures
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  {isInputClicked && (
                    <button
                      className="ml-2 px-4 py-1 text-xs md:text-md bg-white dark:bg-gray-800 dark:text-white text-black rounded"
                      onClick={inputValue ? () => {} : handleCancel}
                    >
                      {inputValue ? "Submit" : "Cancel"}
                    </button>
                  )}
                </div>
                {/* {isInputClicked && !inputValue && (
                  <div
                    className="absolute left-0 top-full p-2 bg-gray-100 dark:bg-gray-700 rounded shadow z-50
                      w-screen lg:w-full lg:hidden lg:left-0 lg:right-0"
                  >
                    <p>Search History</p>
                  </div>
                )} */}
              </div>

              <div className="flex flex-row gap-0 items-center">
                <button
                  className="relative flex items-center justify-center  text-gray-800 rounded-full border-2 border-transparent hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
                  aria-label="Profile"
                >
                  <MdOutlinePerson className="w-6 h-6 text-gray-800 dark:text-gray-200 " />
                </button>

                <button
                  onClick={toggleLanguage}
                  className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 text-gray-800 rounded-full border-2 border-transparent hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
                  aria-label="Language"
                >
                  <MdOutlineLanguage className="w-5 h-5 text-gray-800 dark:text-gray-200 " />
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
                <ThemeToggle />
              </div>
            </div>
          </div>
          <div className="relative w-full block md:hidden">
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
                  className="bg-gray-50 dark:bg-gray-600 border border-transparent text-gray-900 dark:text-gray-200 sm:text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 px-2 py-1 transition-colors duration-300"
                  placeholder="# products, @ shops"
                  value={inputValue}
                  onChange={handleInputChange}
                  onClick={handleInputClick}
                />
                {/* {isInputClicked && !inputValue && (
                  <div
                    className="absolute left-0 top-full p-2 bg-gray-100 dark:bg-gray-700 rounded shadow z-50
                      w-screen hidden lg:block lg:w-full lg:left-0 lg:right-0"
                  >
                    <p>Suggestions go here</p>
                  </div>
                )} */}
              </div>
              {isInputClicked && (
                <button
                  className="ml-2 px-4 py-1 text-xs md:text-md bg-white dark:bg-gray-800 dark:text-white text-black rounded"
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
              <div className="flex flex-col">
                <div className="block  pb-2 ">
                  <h3 className="text-heading sm:block  md:text-base   font-bold text-gray-400 text-sm">
                    Most Searched Products (#)
                  </h3>
                  <div class="flex justify-start text-xs font-semibold text-gray-600 gap-2 flex-wrap">
                    <span class="bg-gray-100 rounded-full px-3 py-1 ">
                      #Men&apos;s Clothings
                    </span>
                    <span class="bg-gray-100 rounded-full px-3 py-1 ">
                      #Formal Men&apos;s Wear
                    </span>
                    <span class="bg-gray-100 rounded-full px-3 py-1 ">
                      #Sports Wear
                    </span>
                    <span class="bg-gray-100 rounded-full px-3 py-1 ">
                      #Kid&apos;s Shoes
                    </span>
                    <span class="bg-gray-100 rounded-full px-3 py-1 ">
                      #Bridal Dresses
                    </span>
                    <span class="bg-gray-100 rounded-full px-3 py-1 ">
                      #Ethnic Wear for Men
                    </span>
                    <span class="bg-gray-100 rounded-full px-3 py-1 ">
                      #Ethnic Wear for Women
                    </span>
                  </div>
                </div>
                <div className="block  pb-2 ">
                  <h3 className="text-heading sm:block  md:text-base   font-bold text-gray-400 text-sm">
                    Most Searched Vendors (@)
                  </h3>
                  <div class="flex justify-start text-xs font-semibold text-gray-600 gap-2 flex-wrap">
                    <span class="bg-gray-100 rounded-full px-3 py-1 ">
                      @Urban Furnitures
                    </span>
                    <span class="bg-gray-100 rounded-full px-3 py-1 ">
                      @Akon Furnitures
                    </span>
                    <span class="bg-gray-100 rounded-full px-3 py-1 ">
                      @H&M Furnitures
                    </span>
                    <span class="bg-gray-100 rounded-full px-3 py-1 ">
                      @Urban Furnitures
                    </span>
                    <span class="bg-gray-100 rounded-full px-3 py-1 ">
                      @Akon Furnitures
                    </span>
                    <span class="bg-gray-100 rounded-full px-3 py-1 ">
                      @H&M Furnitures
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
