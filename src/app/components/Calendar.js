// Modal.js

import React, { useState } from "react";
import { MdOutlineArrowCircleRight, MdOutlineClose } from "react-icons/md";
import CartItems from "./CartItems";
import { FaCoins } from "react-icons/fa";
import CalendarItems from "./CalendarItems";

const Calendar = ({ isCalendar }) => {
  if (!isCalendar) return null;

  return (
    <div
      className={` fixed top-6 sm:top-8 inset-0 z-10 overflow-y-auto  w-full flex`}
    >
      <div
        className={`w-full px-2 md:px-4  bg-white rounded-md shadow-xl dark:bg-gray-800 transition transform ease-out duration-100 scale-90 h-screen sm:h-screen overflow-y-auto flex-container`}
      >
        <div className="flex justify-between p-2 ">
          <div className="text-md font-bold uppercase">Services</div>
          {/* <button
            className="inline-block no-underline hover:text-black"
            onClick="#"
          >
            <MdOutlineClose className="w-6 h-auto" />
          </button> */}
        </div>
        <div className="flex flex-col lg:flex-row gap-4 md:gap-12 md:py-2">
          {/* CART ITEMS START */}
          <div className="flex-[2]   ">
            <div>
              <CalendarItems />
              <CalendarItems />
              <CalendarItems />
              <CalendarItems />
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

              {/* <div className="flex justify-between border-b py-2">
                <div className="uppercase text-sm md:text-sm font-medium text-gray-500 dark:text-gray-100">
                  Delivery Charge
                </div>
                <div className="text-sm md:text-md font-medium text-gray-900 dark:text-gray-200">
                  Rs.100
                </div>
              </div> */}
              <div className="flex justify-between py-2">
                <div className="uppercase text-md md:text-md font-medium text-gray-900 dark:text-gray-200">
                  Total
                </div>
                <div className="text-sm md:text-lg font-medium text-gray-900 dark:text-gray-200">
                  Rs.2500
                </div>
              </div>
              <div className="text-sm md:text-sm py-5 border-t mt-5">
                The subtotal reflects the total price of your order, including
                duties and taxes, before any applicable discounts.
              </div>
            </div>
            {/* accordion */}
            {/* <div
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
            </div> */}

            <button
              className="w-full py-4 my-6 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95  hover:opacity-75 flex items-center gap-2 justify-center"
              onClick=""
            >
              Checkout
              {/* {loading && <img src="/spinner.svg" />} */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
