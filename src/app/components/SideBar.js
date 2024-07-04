"use client";

import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  MdCalendarMonth,
  MdOutlineClose,
  MdOutlineShoppingBag,
  MdOutlineArrowCircleRight,
} from "react-icons/md";
import { FaCoins } from "react-icons/fa";
import CartItems from "../components/CartItems";
import Link from "next/link";
const SideBar = () => {
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

  return (
    // <div
    //   className="fixed md:right-0 md:top-0  h-full flex flex-col gap-4 z-15  justify-end md:justify-start py-24 px-4  "
    //   id="nav-content"
    // >
    <div className="flex flex-col gap-4 md:gap-8 py-8 ">
      <button
        className=" bg-white dark:bg-gray-800 py-2 px-2 shadow-lg md:shadow-none shadow-gray-600   relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 text-gray-800 rounded-md border-2 border-transparent hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
        aria-label="Calendar"
        onClick={toggleCalendarMenu}
      >
        <MdCalendarMonth className="w-6 h-6 sm:w-8 sm:h-8 dark:text-gray-200" />
        <span className="absolute inset-0 flex items-center justify-center -mt-4 -mr-7 bg-gray-600 text-white rounded-full w-6 h-6 sm:w-8 sm:h-8">
          <span className="text-xs sm:text-sm">2</span>
        </span>
      </button>

      <button
        className=" bg-white dark:bg-gray-800  p-2 shadow-lg md:shadow-none shadow-gray-600   relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 text-gray-800 rounded-md border-2 border-transparent hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
        aria-label="Cart"
        onClick={toggleCartMenu}
      >
        <MdOutlineShoppingBag className="w-6 h-6 sm:w-8 sm:h-8 dark:text-gray-200" />
        <span className="absolute inset-0 flex items-center justify-center -mt-4 -mr-7 bg-gray-600 text-white rounded-full w-6 h-6 sm:w-8 sm:h-8">
          <span className="text-xs sm:text-sm">3</span>
        </span>
      </button>
      {isCart && (
        <div
          className={`absolute px-4 md:px-8 right-0  md:left-10 lg:left-12 xl:left-12 z-20 w-screen py-0 md:-mt-8 bg-white rounded-md shadow-xl dark:bg-gray-800 transition transform ease-out duration-100 scale-90 h-screen sm:h-auto overflow-y-scroll`}
          style={{
            // top: "5.5rem",
            top: window.innerWidth < 768 ? "0" : "5.5rem",
            transformOrigin: window.innerWidth < 768 ? "top right" : "top left",
          }}
        >
          <div className="flex justify-between p-2 ">
            <div className="text-md font-bold uppercase">Products On Bag</div>
            <button
              className="inline-block no-underline hover:text-black"
              onClick={toggleCartMenu}
            >
              <MdOutlineClose className="w-6 h-auto" />
            </button>
          </div>
          <div className="flex flex-col lg:flex-row gap-4 md:gap-12 md:py-2">
            {/* CART ITEMS START */}
            <div className="flex-[2] h-screen overflow-auto  md:pb-10">
              <div>
                <CartItems />
                <CartItems />
                <CartItems />
              </div>
              <div className="border-b pb-2 flex-[2]">
                <span className="text-[12px] text-gray-400">
                  Available Coupons:
                </span>
                <div className="grid grid-cols-2  lg:grid-cols-4 gap-1 justify-between py-0">
                  <div className="flex-shrink-0 min-w-screen border border-gray-300 text-gray-400 py-1  px-4 rounded-lg shadow-md relative">
                    <h3 className="text-xs font-semibold mb-1 text-center">
                      Loyalty Rewards
                    </h3>
                    <div className="flex justify-between items-center text-center pb-1">
                      <div className="flex space-x-1 items-center">
                        <FaCoins className="w-4 h-auto" />
                        <span>100</span>
                      </div>
                      <span className="text-gray-200 text-sm rounded-r cursor-pointer">
                        <MdOutlineArrowCircleRight className="w-6 h-auto text-gray-400" />
                      </span>
                    </div>
                  </div>
                  <div className="flex-shrink-0 min-w-screen border border-gray-300 text-gray-400 py-1 px-4 rounded-lg shadow-md relative">
                    <h3 className="text-xs font-semibold mb-1 text-center">
                      Loyalty Rewards
                    </h3>
                    <div className="flex justify-between items-center text-center py-1">
                      <div className="flex space-x-1 items-center">
                        <FaCoins className="w-4 h-auto" />
                        <span>100</span>
                      </div>
                      <span className="text-gray-200 text-sm rounded-r cursor-pointer">
                        <MdOutlineArrowCircleRight className="w-6 h-auto text-gray-400" />
                      </span>
                    </div>
                  </div>

                  <div className="flex-shrink-0 min-w-screen border border-gray-300 text-gray-400 py-1  px-4 rounded-lg shadow-md relative">
                    <h3 className="text-xs font-semibold mb-1 text-center">
                      Loyalty Rewards
                    </h3>
                    <div className="flex justify-between items-center text-center pb-1">
                      <div className="flex space-x-1 items-center">
                        <FaCoins className="w-4 h-auto" />
                        <span>100</span>
                      </div>
                      <span className="text-gray-200 text-sm rounded-r cursor-pointer">
                        <MdOutlineArrowCircleRight className="w-6 h-auto text-gray-400" />
                      </span>
                    </div>
                  </div>
                  <div className="flex-shrink-0 min-w-screen border border-gray-300 text-gray-400 py-1 px-4 rounded-lg shadow-md relative">
                    <h3 className="text-xs font-semibold mb-1 text-center">
                      Loyalty Rewards
                    </h3>
                    <div className="flex justify-between items-center text-center py-1">
                      <div className="flex space-x-1 items-center">
                        <FaCoins className="w-4 h-auto" />
                        <span>100</span>
                      </div>
                      <span className="text-gray-200 text-sm rounded-r cursor-pointer">
                        <MdOutlineArrowCircleRight className="w-6 h-auto text-gray-400" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-[1]">
              <div className="text-md font-bold">Summary</div>

              <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
                <div className="flex justify-between border-b py-2 ">
                  <div className="uppercase text-sm md:text-sm font-medium text-gray-500 dark:text-gray-100">
                    Subtotal
                  </div>
                  <div className="text-sm md:text-md font-medium text-gray-900 dark:text-gray-200">
                    Rs.2500
                  </div>
                </div>

                <div className="flex justify-between border-b py-2">
                  <div className="uppercase text-sm md:text-sm font-medium text-gray-500 dark:text-gray-100">
                    Delivery Charge
                  </div>
                  <div className="text-sm md:text-md font-medium text-gray-900 dark:text-gray-200">
                    Rs.100
                  </div>
                </div>
                <div className="flex justify-between py-2">
                  <div className="uppercase text-md md:text-md font-medium text-gray-900 dark:text-gray-200">
                    Total
                  </div>
                  <div className="text-sm md:text-lg font-medium text-gray-900 dark:text-gray-200">
                    Rs.2600
                  </div>
                </div>
                <div className="text-sm md:text-sm py-5 border-t mt-5">
                  The subtotal reflects the total price of your order, including
                  duties and taxes, before any applicable discounts.
                </div>
              </div>
              {/* accordion */}
              <div
                id="accordion-flush"
                data-accordion="collapse"
                data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                data-inactive-classes="text-gray-500 dark:text-gray-400"
              >
                <h2 id="accordion-flush-heading-1">
                  <button
                    type="button"
                    className={`flex justify-between items-center py-5 w-full font-medium text-left border-b border-gray-200 dark:border-gray-200 ${
                      openSection === 1
                        ? "text-gray-900 dark:text-white"
                        : "text-gray-500 dark:text-gray-400"
                    }`}
                    onClick={() => toggleSection(1)}
                    aria-expanded={openSection === 1}
                    aria-controls="accordion-flush-body-1"
                  >
                    <span>Scheduled Delivery</span>
                    <svg
                      data-accordion-icon
                      className={`w-6 h-6 transform ${
                        openSection === 1 ? "rotate-180" : ""
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </h2>
                <div
                  id="accordion-flush-body-1"
                  className={openSection === 1 ? "" : "hidden"}
                  aria-labelledby="accordion-flush-heading-1"
                >
                  <div className="py-2 border-b border-gray-200 dark:border-gray-700">
                    <div className="px-2">
                      <div className="">
                        <div className="flex flex-col md:flex-row  md:justify-between items-start mb-2">
                          <div className="flex w-full md:gap-2 justify-between md:justify-start">
                            <input
                              type="date"
                              id="calendar"
                              className="shadow-md p-2 bg-gray-200 text-gray-600 dark:bg-gray-800 dark:text-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
                            />
                            <input
                              type="time"
                              id="time"
                              className="shadow-md p-2 bg-gray-200 text-gray-600 dark:bg-gray-800 dark:text-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
                            />
                          </div>
                          <button className="shadow-md mt-2 text-xs p-2 bg-black  text-gray-200 rounded-md uppercase">
                            Schedule
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h2 id="accordion-flush-heading-1">
                  <button
                    type="button"
                    className={`flex justify-between items-center py-5 w-full font-medium text-left border-b border-gray-200 dark:border-gray-200 ${
                      openSection === 2
                        ? "text-gray-900 dark:text-white"
                        : "text-gray-500 dark:text-gray-400"
                    }`}
                    onClick={() => toggleSection(2)}
                    aria-expanded={openSection === 2}
                    aria-controls="accordion-flush-body-1"
                  >
                    <span>Subscriptions</span>
                    <svg
                      data-accordion-icon
                      className={`w-6 h-6 transform ${
                        openSection === 2 ? "rotate-180" : ""
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </h2>
                <div
                  id="accordion-flush-body-1"
                  className={openSection === 2 ? "" : "hidden"}
                  aria-labelledby="accordion-flush-heading-1"
                >
                  <div className="py-2 border-b border-gray-200 dark:border-gray-700">
                    <div className="px-2">
                      <div className="">
                        <div className="flex flex-col gap-2 items-start mb-2">
                          <div className="flex gap-3 flex-wrap ">
                            <label className="flex items-center">
                              <input
                                type="radio"
                                name="day"
                                value="sunday"
                                className="mr-1 sm:mr-2"
                              />
                              <span className="text-sm">Sun</span>
                            </label>
                            <label className="flex items-center">
                              <input
                                type="radio"
                                name="day"
                                value="monday"
                                className="mr-1 sm:mr-2"
                              />
                              <span className="text-sm">Mon</span>
                            </label>
                            <label className="flex items-center">
                              <input
                                type="radio"
                                name="day"
                                value="tuesday"
                                className="mr-1 sm:mr-2"
                              />
                              <span className="text-sm">Tues</span>
                            </label>
                            <label className="flex items-center">
                              <input
                                type="radio"
                                name="day"
                                value="wednesday"
                                className="mr-1 sm:mr-2"
                              />
                              <span className="text-sm">Wednes</span>
                            </label>
                            <label className="flex items-center">
                              <input
                                type="radio"
                                name="day"
                                value="thursday"
                                className="mr-1 sm:mr-2"
                              />
                              <span className="text-sm">Thurs</span>
                            </label>
                            <label className="flex items-center">
                              <input
                                type="radio"
                                name="day"
                                value="friday"
                                className="mr-1 sm:mr-2"
                              />
                              <span className="text-sm">Fri</span>
                            </label>
                            <label className="flex items-center">
                              <input
                                type="radio"
                                name="day"
                                value="saturday"
                                className="mr-1 sm:mr-2"
                              />
                              <span className="text-sm">Sat</span>
                            </label>
                          </div>
                          <div className="flex gap-4 items-center">
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              Delivery Time:
                            </span>
                            <input
                              type="time"
                              id="time"
                              className="shadow-md p-2 bg-gray-200 text-gray-600 dark:bg-gray-800 dark:text-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button
                className="w-full py-4 my-6 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center"
                onClick=""
              >
                Checkout
                {/* {loading && <img src="/spinner.svg" />} */}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    // </div>
  );
};

export default SideBar;
