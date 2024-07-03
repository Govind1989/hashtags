"use client";
import React, { useState, useEffect } from "react";
import Layout from "../app/layout";
import { useRouter } from "next/router";
import { MdArrowBack } from "react-icons/md";
import CartItems from "../app/components/CartItems";

const Cart = () => {
  const router = useRouter();
  const [openSection, setOpenSection] = useState(null);

  const handleGoBack = () => {
    router.back();
  };
  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };
  // Use useEffect to manage client-side state updates
  useEffect(() => {
    // Example of initializing state if it's null on client-side
    if (openSection === null) {
      setOpenSection(/* initial value based on client-side logic */);
    }
  }, []);

  return (
    // <Layout>
    <div className=" w-full py-0  bg-white rounded-md  dark:bg-gray-800 transition transform ease-out duration-100 scale-90 h-screen ">
      <div className="flex flex-col lg:flex-row gap-4 md:gap-6 ">
        {/* CART ITEMS START */}
        <div className="flex-[2] h-auto  md:pb-10">
          <div className="flex gap-4">
            <button
              className="pl-3 inline-block no-underline hover:text-black"
              onClick={handleGoBack}
            >
              <MdArrowBack className="w-6 h-auto" />
            </button>
            <div className="text-md font-bold uppercase">Products On Bag</div>
          </div>

          <CartItems />
          <CartItems />
          <CartItems />
        </div>

        <div className="flex-[1]">
          <div className="text-md font-bold">Summary</div>

          <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
            <div className="flex justify-between border-b py-2 ">
              <div className="uppercase text-sm md:text-sm font-medium text-gray-500">
                Subtotal
              </div>
              <div className="text-sm md:text-md font-medium text-gray-900">
                Rs.2500
              </div>
            </div>
            <div className="flex justify-between border-b py-2">
              <div className="uppercase text-sm md:text-sm font-medium text-gray-500">
                Delivery Charge
              </div>
              <div className="text-sm md:text-md font-medium text-gray-900">
                Rs.100
              </div>
            </div>
            <div className="flex justify-between py-2">
              <div className="uppercase text-md md:text-md font-medium text-gray-900">
                Total
              </div>
              <div className="text-sm md:text-lg font-medium text-gray-900">
                Rs.2600
              </div>
            </div>
            <div className="text-sm md:text-sm py-5 border-t mt-5">
              The subtotal reflects the total price of your order, including
              duties and taxes, before any applicable discounts.
            </div>
          </div>

          <div
            id="accordion-flush"
            data-accordion="collapse"
            data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            data-inactive-classes="text-gray-500 dark:text-gray-400"
          >
            <h2 id="accordion-flush-heading-1">
              <button
                type="button"
                className={`flex justify-between items-center py-5 w-full font-medium text-left border-b border-gray-200 dark:border-gray-700 ${
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
                          className="shadow-md p-2 rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
                        />
                        <input
                          type="time"
                          id="time"
                          className="shadow-md p-2  rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
                        />
                      </div>
                      <button className="shadow-md mt-2 text-xs p-2 bg-gray-400 text-white rounded-md uppercase">
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
                className={`flex justify-between items-center py-5 w-full font-medium text-left border-b border-gray-200 dark:border-gray-700 ${
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
                            className="mr-1"
                          />
                          <span className="text-sm">Sun</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="day"
                            value="monday"
                            className="mr-1"
                          />
                          <span className="text-sm">Mon</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="day"
                            value="tuesday"
                            className="mr-1"
                          />
                          <span className="text-sm">Tues</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="day"
                            value="wednesday"
                            className="mr-1"
                          />
                          <span className="text-sm">Wednes</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="day"
                            value="thursday"
                            className="mr-1"
                          />
                          <span className="text-sm">Thurs</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="day"
                            value="friday"
                            className="mr-1"
                          />
                          <span className="text-sm">Fri</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="day"
                            value="saturday"
                            className="mr-1"
                          />
                          <span className="text-sm">Sat</span>
                        </label>
                      </div>
                      <div className="flex gap-4 items-center">
                        <span className="text-sm text-gray-600">
                          Delivery Time:
                        </span>
                        <input
                          type="time"
                          id="time"
                          className="shadow-md p-2  rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
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
    // </Layout>
  );
};

export default Cart;
