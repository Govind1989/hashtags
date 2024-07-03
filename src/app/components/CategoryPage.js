"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import ReelsCarousel from "./ReelsCarousel.js";
import { cardData, categoryData } from "../../data.js";

import Masonry from "./Masonry.js";

import CountDownTimer from "./CountDownTimer.js";
import { MdAlarmOn, MdOutlineDiscount } from "react-icons/md";
import { BsBookmarkPlus, BsBookmarkStar, BsPlusSquare } from "react-icons/bs";
import { FaSort } from "react-icons/fa";
import Layout from "../../../src/pages/layout.js";
const CategoryPage = ({ slug }) => {
  const [item, setItem] = useState(0);

  const [active, setActive] = useState(0);
  const [isFilter, setIsFilter] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState(["categories"]);
  const [isCollections, setIsCollections] = useState(false);
  const [isFlashSale, setIsFlashSale] = useState(false);

  const formattedSlug =
    slug.charAt(0).toUpperCase() + slug.slice(1).toLowerCase();
  const categoryInfo = categoryData[formattedSlug];

  // Filter cardData based on the mainCategory matching the uppercase version of slug
  const filteredData = cardData.filter(
    (item) => item.mainCategory.toLowerCase() === slug.toLowerCase()
  );

  const categories = [...new Set(filteredData.map((item) => item.category))];
  const brands = [...new Set(filteredData.map((item) => item.brand))];
  // const collections = [...new Set(cardData.map((item) => item.collection))];
  const vendors = [...new Set(filteredData.map((item) => item.vendor))];

  const filterColors = {
    categories: "border-green-800",
    brands: "border-red-300",
    collections: "border-green-300",
    vendors: "border-blue-300",
  };

  const collectionMenu = ["Most Selling", "New Arrivals", "On Sale"];

  const handleFilterChange = (filter) => {
    setSelectedFilters((prevFilters) =>
      prevFilters.includes(filter)
        ? prevFilters.filter((f) => f !== filter)
        : [...prevFilters, filter]
    );
  };

  const getFilteredData = () => {
    let filteredData = [];

    if (selectedFilters.includes("categories")) {
      filteredData = [
        ...filteredData,
        ...categories.map((item) => ({ type: "categories", item })),
      ];
    }
    if (selectedFilters.includes("brands")) {
      filteredData = [
        ...filteredData,
        ...brands.map((item) => ({ type: "brands", item })),
      ];
    }
    // if (selectedFilters.includes("collections")) {
    //   filteredData = [...filteredData, ...collections.map(item => ({ type: 'collections', item }))];
    // }
    if (selectedFilters.includes("vendors")) {
      filteredData = [
        ...filteredData,
        ...vendors.map((item) => ({ type: "vendors", item })),
      ];
    }
    // Shuffle the filtered data array
    // const shuffledData = shuffleArray(filteredData);
    // return shuffledData;

    return filteredData;
  };
  // Function to shuffle array items
  // const shuffleArray = (array) => {
  //   const shuffledArray = [...array];
  //   for (let i = shuffledArray.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [shuffledArray[i], shuffledArray[j]] = [
  //       shuffledArray[j],
  //       shuffledArray[i],
  //     ];
  //   }
  //   return shuffledArray;
  // };

  const navMenu = getFilteredData();

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };
  const handleCollectionClick = () => {
    setIsCollections(!isCollections);
    setIsFlashSale(false);
    if (isCollections) {
      setSelectedFilters([]);
    }
  };
  const handleFlashSaleClick = () => {
    setIsFlashSale(!isFlashSale);
    setIsCollections(false);
    if (isFlashSale) {
      setSelectedFilters([]);
    }
  };
  const toggleFilter = () => {
    setIsFilter(!isFilter);
  };

  useEffect(() => {
    if (selectedFilters.length > 0) {
      setIsCollections(false);
      setIsFlashSale(false);
    }
  }, [selectedFilters]);

  const durationMap = {
    wearables: "Daily",
    foods: "HappyHourStart",
    furnitures: "Monthly",
    electronics: "Monthly",
    computers: "Weekly",
    mobiles: "Weekly",
  };
  const dealsTitleMap = {
    foods: "Happy Hours",
    default: "Flash Deal",
  };

  // Get the duration based on the slug
  const countdownDuration = durationMap[slug.toLowerCase()] || "Daily";
  const countdownTitle =
    dealsTitleMap[slug.toLowerCase()] || dealsTitleMap.default;
  // Extracting unique categories from cardData
  // const categories = [...new Set(cardData.map((item) => item.category))];
  return (
    <>
      <Layout>
        <div className="flex min-h-screen  flex-col p-4  justify-between ">
          {/* Reels */}
          <div className="grid grid-cols-6 gap-2">
            <div className="lg:col-span-2 col-span-6 py-0 md:order-first ">
              <div className="md:p-8  rounded-xl">
                <div className="">
                  <h1 className="text-sm font-bold text-gray-400 ">
                    # {categoryInfo.title}
                  </h1>
                  <p className="text-gray-700 dark:text-gray-200">
                    {categoryInfo.description}
                  </p>
                </div>

                <div className="hidden xl:flex  md:flex-wrap overflow-x-auto md:justify-center custom-hr-scroll">
                  <div className="w-full md:w-1/2 p-2 flex-shrink items-center justify-center whitespace-nowrap">
                    <div className="w-full capitalize py-2 px-2 justify-center rounded-md text-sm font-medium whitespace-nowrap bg-white dark:bg-gray-800 shadow-md text-gray-800  transition-transform transform hover:scale-105 text-center flex flex-col items-center">
                      <label className="group flex flex-col justify-center  items-center text-heading text-sm cursor-pointer">
                        <span className="ms-2  -mt-0.5 text-gray-600 dark:text-gray-200">
                          {categoryInfo.product_tags}+
                        </span>
                        <span className="ms-2  -mt-0.5 text-xs text-gray-400 dark:text-gray-200">
                          Product Tags
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 p-2 flex-shrink items-center justify-center">
                    <div className="w-full capitalize py-2 px-2 justify-center rounded-md text-sm font-medium whitespace-nowrap bg-white dark:bg-gray-800 shadow-md text-gray-800 transition-transform transform hover:scale-105 text-center flex flex-col items-center">
                      <label className="group flex flex-col justify-center  items-center text-heading text-sm cursor-pointer">
                        <span className="ms-2 text-sm  -mt-0.5 text-gray-600 dark:text-gray-200">
                          {categoryInfo.brands}+
                        </span>
                        <span className="ms-2  -mt-0.5 text-xs text-gray-400 dark:text-gray-200">
                          Brands
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 p-2 flex-shrink items-center justify-center">
                    <div className="w-full capitalize py-2 px-2 justify-center rounded-md text-sm font-medium whitespace-nowrap bg-white dark:bg-gray-800 shadow-md text-gray-800 transition-transform transform hover:scale-105 text-center flex flex-col items-center">
                      <label className="group flex flex-col whitespace-nowrap items-center text-heading text-sm cursor-pointer">
                        <span className="ms-2 text-sm  -mt-0.5 text-gray-600 dark:text-gray-200">
                          {categoryInfo.vendors}+
                        </span>
                        <span className="ms-2  -mt-0.5 text-xs text-gray-400 dark:text-gray-200">
                          Vendors
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 p-2 flex-shrink items-center justify-center">
                    <div className="w-full capitalize py-2 px-2 justify-center rounded-md text-sm font-medium whitespace-nowrap bg-white dark:bg-gray-800 shadow-md text-gray-800 transition-transform transform hover:scale-105 text-center flex flex-col items-center">
                      <label className="group flex flex-col justify-center  items-center text-heading text-sm cursor-pointer">
                        <span className="ms-2 text-sm  -mt-0.5 text-gray-600 dark:text-gray-200">
                          {categoryInfo.campaigns}+
                        </span>
                        <span className="ms-2  -mt-0.5 text-xs text-gray-400 dark:text-gray-200">
                          Campaigns
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="w-full h-1 mt-2 md:mt-4 text-gray-400 block md:hidden" />
            </div>
            <div className="lg:col-span-4 col-span-6 md:order-last">
              <ReelsCarousel />
            </div>
          </div>
          {/* Pass categories data to Category component */}
          {/* <Category categories={categories} /> */}
          {/* categories */}
          <div className="grid grid-cols-12 ml-0 md:ml-2 xl:ml-8 lg:ml-12 items-center">
            <div className="lg:col-span-1 md:col-span-2 col-span-3 py-0 justify-center md:order-first mt-1   ">
              <button
                onClick={toggleFilter}
                className="flex flex-shrink-0 gap-2 px-6 py-4 shadow-lg bg-white dark:bg-gray-400 rounded-md items-center justify-center relative group"
              >
                <span className="text-gray-800 text-sm hidden md:block ">
                  Filter
                </span>
                <svg
                  aria-label="filter"
                  className="AR6 gUZ U9O kVc"
                  height="16"
                  role="img"
                  viewBox="0 0 24 24"
                  width="16"
                >
                  <path d="M9 19.5A1.75 1.75 0 1 1 9 16a1.75 1.75 0 0 1 0 3.5M22.25 16h-8.32a5.24 5.24 0 0 0-9.86 0H1.75a1.75 1.75 0 0 0 0 3.5h2.32a5.24 5.24 0 0 0 9.86 0h8.32a1.75 1.75 0 0 0 0-3.5M15 4.5A1.75 1.75 0 1 1 15 8a1.75 1.75 0 0 1 0-3.5M1.75 8h8.32a5.24 5.24 0 0 0 9.86 0h2.32a1.75 1.75 0 0 0 0-3.5h-2.32a5.24 5.24 0 0 0-9.86 0H1.75a1.75 1.75 0 0 0 0 3.5"></path>
                </svg>
                {isFilter && (
                  <div
                    onClick={() => setIsFilter(false)}
                    className="absolute -left-4 justify-start top-10 z-20 w-55 py-0 mt-0 origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800 transition transform ease-out duration-100 scale-90"
                  >
                    <label className="group flex px-8 py-2 items-center whitespace-nowrap text-heading text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        className="form-checkbox w-5 h-5 border border-indigo-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading active"
                        name="categories"
                        value="categories"
                        onChange={() => handleFilterChange("categories")}
                        checked={selectedFilters.includes("categories")}
                      />
                      <span className="ms-2 sm:ms-4 -mt-0.5  text-gray-600 dark:text-gray-200">
                        Categories
                      </span>
                    </label>

                    <hr className="border-green-800 " />
                    {slug !== "foods" && (
                      <>
                        <label className="group flex px-8 py-2 items-center whitespace-nowrap text-heading text-sm cursor-pointer">
                          <input
                            type="checkbox"
                            className="form-checkbox w-5 h-5 border border-red-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading active"
                            name="brands"
                            value="brands"
                            onChange={() => handleFilterChange("brands")}
                            checked={selectedFilters.includes("brands")}
                          />
                          <span className="ms-2 sm:ms-4 -mt-0.5  text-gray-600 dark:text-gray-200">
                            Brands
                          </span>
                        </label>
                        <hr className="border-red-300 " />
                      </>
                    )}

                    <label className="group flex px-8 py-2 items-center whitespace-nowrap text-heading text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        className="form-checkbox w-5 h-5 border border-blue-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading active"
                        name="vendors"
                        value="vendors"
                        onChange={() => handleFilterChange("vendors")}
                        checked={selectedFilters.includes("vendors")}
                      />
                      <span className="ms-2 sm:ms-4 -mt-0.5  text-gray-600 dark:text-gray-200">
                        Vendors
                      </span>
                    </label>
                    <hr className="border-blue-300 " />

                    <div className="flex items-center px-8 py-2 group gap-0 w-full">
                      <FaSort className="w-4 h-auto" />
                      <Link
                        href="#"
                        className="text-sm text-gray-600  transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white whitespace-nowrap ml-2"
                      >
                        Sort By Price
                      </Link>
                    </div>
                    <hr className="border-gray-200 dark:border-gray-700" />

                    <div className="flex items-center px-8 py-2 group gap-0 w-full">
                      <BsPlusSquare className="w-4 h-auto" />
                      <button
                        onClick={handleCollectionClick}
                        className="text-sm text-gray-600 transition-colors  duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white whitespace-nowrap ml-2"
                      >
                        Collections
                      </button>
                    </div>
                    <hr className="border-gray-200 dark:border-gray-700" />

                    <div className="flex items-center px-8 py-2 group gap-0 w-full">
                      {/* <CountDownTimer Duration="Daily" /> */}
                      <MdAlarmOn className="w-5 h-auto" />
                      <button
                        onClick={handleFlashSaleClick}
                        className="text-sm text-gray-600 transition-colors  duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white whitespace-nowrap ml-2"
                      >
                        {countdownTitle}
                      </button>
                    </div>
                  </div>
                )}
              </button>
            </div>

            <div className="lg:col-span-11 md:col-span-10 col-span-9 py-0 items-center ">
              {!isCollections && !isFlashSale && (
                <ul
                  className={`w-full flex flex-row md:justify-start justify-start items-center text-[#005761] dark:text-white overflow-hidden hover:overflow-x-scroll whitespace-nowrap flex-container`}
                >
                  {navMenu.map((item, index) => {
                    // Determine the border color based on the item's type
                    const borderColor =
                      filterColors[item.type] || "border-gray-300";

                    return (
                      <li
                        onClick={(e) => handleClick(e, index)}
                        className="cursor-pointer capitalize p-4 mt-2 "
                        key={index}
                      >
                        <span
                          className={`capitalize py-2 px-3 rounded-md text-sm font-medium whitespace-nowrap shadow-md transition-transform transform hover:scale-105 ${
                            active === index
                              ? `border-gray-800 dark:border-gray-200 border-b-2 border-t-2`
                              : `border-b-2 ${borderColor}`
                          }`}
                        >
                          {item.item}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              )}
              {isCollections && !isFlashSale && (
                <ul
                  className={`w-full flex flex-row md:justify-start justify-start items-center text-[#005761] overflow-hidden hover:overflow-x-scroll whitespace-nowrap flex-container`}
                >
                  {collectionMenu.map((item, index) => {
                    // Determine the border color based on the item's type

                    return (
                      <>
                        <li
                          onClick={(e) => handleClick(e, index)}
                          className="cursor-pointer capitalize p-4"
                          key={index}
                        >
                          <span
                            className={`capitalize py-3 px-3 rounded-md text-sm font-medium whitespace-nowrap shadow-md transition-transform transform hover:scale-105 ${
                              active === index
                                ? `border-[#005761] border-b-2`
                                : `shadow-md`
                            }`}
                          >
                            {item}
                          </span>
                        </li>

                        <hr className="border-gray-200 dark:border-gray-700" />
                      </>
                    );
                  })}
                </ul>
              )}
              {isFlashSale && (
                <div className="flex justify-between items-center w-full">
                  <span className="text-gray-800 text-xs sm:text-md md:text-lg xl:ml-4 mt-2">
                    {countdownTitle}
                  </span>
                  <div className="items-end mt-2">
                    <CountDownTimer Duration={countdownDuration} />
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* Masonary */}
          {/* Pass cardData (products) to Masonry component */}
          <Masonry cardData={filteredData} slug={slug} />
        </div>
      </Layout>
    </>
  );
};

export default CategoryPage;
