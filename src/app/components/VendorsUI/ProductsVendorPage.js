"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

import { cardData, categoryData } from "../../../data.js";

import Masonry from "../Masonry.js";
import CuratedCarousel from "../CuratedCarousel.js";
import CountDownTimer from "../CountDownTimer.js";
import { MdAlarmOn } from "react-icons/md";
import { BsPlusSquare } from "react-icons/bs";
import {
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaSort,
  FaYoutube,
} from "react-icons/fa";
import Layout from "../../../pages/layout.js";
import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";
const ProductsVendorPage = ({ slug }) => {
  const [item, setItem] = useState(0);
  const [rating, setRating] = useState(4);
  const [active, setActive] = useState(0);
  const [isFilter, setIsFilter] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState(["categories"]);
  const [isCollections, setIsCollections] = useState(false);
  const [isFlashSale, setIsFlashSale] = useState(false);

  const vendor = cardData.find((item) => item.vendorSlug === slug).vendor;
  const filteredData = cardData.filter((item) => item.vendorSlug === slug);

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

  const collectionMenu = [
    "Most Selling",
    "New Arrivals",
    "On Sale",
    "Free Shipping",
  ];

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

    if (selectedFilters.includes("vendors")) {
      filteredData = [
        ...filteredData,
        ...vendors.map((item) => ({ type: "vendors", item })),
      ];
    }

    return filteredData;
  };

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
    default: "Flash Deal",
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<IoStar key={i} className="text-gray-400 w-6 h-6" />);
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        stars.push(<IoStarHalf key={i} className="text-gray-400 w-6 h-6" />);
      } else {
        stars.push(<IoStarOutline key={i} className="text-gray-400 w-6 h-6" />);
      }
    }
    return stars;
  };

  // Get the duration based on the slug
  const countdownDuration = durationMap[slug.toLowerCase()] || "Daily";
  const countdownTitle =
    dealsTitleMap[slug.toLowerCase()] || dealsTitleMap.default;

  return (
    <>
      <Layout isMessage={true} slug={slug}>
        {/* {slug} */}
        <div className="bg-white dark:bg-gray-800  min-h-screen  px-2 ">
          {/* banners */}
          <div className="w-full md:px-4 flex flex-wrap">
            <div className="w-full px-2 lg:px-4  lg:w-8/12">
              <div className="relative mb-4 sm:mb-8 h-[370px] md:h-[462px]">
                <img
                  src="https://demo.tailgrids.com/templates/planet/build/src/assets/ecom-images/headers/header-04/image-01.jpg"
                  alt="product"
                  className="h-full w-full object-cover object-center"
                />

                <div className="absolute left-0 top-0 flex h-full w-full items-center px-8 md:px-12">
                  <div className="max-w-[420px] w-[200px] sm:w-full">
                    <h3>
                      <Link
                        href="#"
                        className="mb-5 block text-2xl font-bold text-dark hover:text-primary sm:text-4xl"
                      >
                        Mega Sale Up To 50% Off For All
                      </Link>
                    </h3>
                    <p className="mb-9 text-base text-body-color">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vestibulum ornare vestibulum mollis. Nam vitae augue
                      purus. Integer ac accumsan nunc.
                    </p>
                    <Link
                      href="#"
                      className="inline-flex items-center justify-center rounded-md bg-primary px-0 py-[13px] text-center text-base font-medium text-gray-800 hover:bg-blue-dark"
                    >
                      Grab The Offer
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-2 lg:w-4/12">
              <div className="-mx-6 flex flex-wrap">
                <div className="w-full px-4 md:w-1/2 lg:w-full">
                  <div className="relative mb-4 h-[223px]">
                    <img
                      src="https://demo.tailgrids.com/templates/planet/build/src/assets/ecom-images/headers/header-04/image-02.jpg"
                      alt="product"
                      className="h-full w-full object-cover object-center"
                    />

                    <div className="absolute left-0 top-0 flex h-full w-full items-end justify-end p-6 sm:p-9">
                      <div className="max-w-[180px] text-right">
                        <h3>
                          <Link
                            href="#"
                            className="mb-3 block text-xl font-bold text-dark hover:text-primary xl:text-2xl"
                          >
                            Summer Travel Collection
                          </Link>
                        </h3>
                        <Link
                          href="#"
                          className="text-base font-medium text-dark hover:text-primary"
                        >
                          Discover Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full px-4 md:w-1/2 lg:w-full">
                  <div className="relative mb-8 h-[223px]">
                    <img
                      src="https://demo.tailgrids.com/templates/planet/build/src/assets/ecom-images/headers/header-04/image-03.jpg"
                      alt="product"
                      className="h-full w-full object-cover object-center"
                    />

                    <div className="absolute left-0 top-0 flex h-full w-full items-end justify-end p-6 sm:p-9">
                      <div className="max-w-[180px] text-right">
                        <h3>
                          <Link
                            href="#"
                            className="mb-3 block text-xl font-bold text-dark hover:text-primary xl:text-2xl"
                          >
                            Get 30% Off On iPhone
                          </Link>
                        </h3>
                        <Link
                          href="#"
                          className="text-base font-medium text-dark hover:text-primary"
                        >
                          Shop Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* products */}
          <div className="flex flex-row gap-0 w-full mt-2 md:px-8 items-center">
            <div
              className={`md:justify-center justify-start px-2 py-2 border-r-2 border-[#eae2b4] rounded-tl-xl rounded-bl-xl ${
                isFilter
                  ? "bg-gray-500 dark:bg-gray-500"
                  : "bg-white dark:bg-gray-700"
              } `}
            >
              <button
                onClick={toggleFilter}
                className="flex flex-shrink-0 gap-2 px-2  rounded-md items-center mt-2 justify-center relative group "
              >
                <span className="text-gray-800 dark:text-gray-200 text-sm hidden md:block ">
                  Filter
                </span>
                <svg
                  aria-label="filter"
                  className="AR6 gUZ U9O kVc dark:text-gray-200"
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
                  </div>
                )}
              </button>
            </div>

            <div className="overflow-x-scroll flex-container">
              {!isCollections && !isFlashSale && (
                <ul
                  className={`w-full flex flex-row md:justify-start justify-start items-center text-[#005761] dark:text-white overflow-x-scroll whitespace-nowrap flex-container`}
                >
                  {navMenu.map((item, index) => {
                    // Determine the border color based on the item's type
                    const borderColor =
                      filterColors[item.type] || "border-gray-300";

                    return (
                      <li
                        onClick={(e) => handleClick(e, index)}
                        className="cursor-pointer capitalize px-1 py-2 mt-2 shadow-md "
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
              {/* {isCollections && !isFlashSale && (
                <ul
                  className={`w-full flex flex-row md:justify-start justify-start items-center text-[#005761] overflow-hidden hover:overflow-x-scroll whitespace-nowrap flex-container`}
                >
                  {collectionMenu.map((item, index) => {
                    // Determine the border color based on the item's type

                    return (
                      <>
                        <li
                          onClick={(e) => handleClick(e, index)}
                          className="cursor-pointer capitalize px-1 py-2 mt-2 shadow-md"
                          key={index}
                        >
                          <span
                            className={`capitalize py-2 px-3 rounded-md text-sm font-medium whitespace-nowrap shadow-md transition-transform transform hover:scale-105 ${
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
              )} */}
            </div>
          </div>
          <Masonry cardData={filteredData} />
          {/* Curated */}
          <div className=" items-center py-0 md:px-6 h-auto">
            <div id="store" className="w-full top-0 md:px-4 sm:py-1">
              <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
                <div
                  className="uppercase  tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl"
                  href="#"
                >
                  Curated For You
                </div>
              </div>
            </div>

            <div className="grid grid-cols-6 gap-4">
              <div className="md:col-span-2 col-span-6 py-0 md:order-first ">
                <div className="md:p-8 md:bg-gray-100 rounded-xl">
                  <div className="hidden md:block mb-4">
                    <h1 className="text-sm font-bold text-gray-400 text-center lg:text-start ">
                      #Explore
                    </h1>
                    <p className="text-gray-700 lg:block hidden">
                      Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                      aliquet velit. Aliquam vulputate velit imperdiet dolor
                      tempor tristique.
                    </p>
                  </div>
                  <div className="flex flex-row md:flex-col md:overflow-hidden overflow-scroll gap-2 mx-5 custom-scrollbar">
                    {collectionMenu.map((category, index) => (
                      <button
                        key={index}
                        onClick={(e) => handleClick(e, index)}
                        className={`capitalize py-3 px-4 rounded-md text-sm  font-medium whitespace-nowrap shadow-md transition-transform transform hover:scale-105 ${
                          active === index
                            ? "bg-gray-800 text-white"
                            : "bg-white text-gray-800"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
                <hr className="w-full h-1 mt-4 text-gray-400 block md:hidden" />
              </div>
              <div className="md:col-span-4 col-span-6 md:order-last">
                <CuratedCarousel />
              </div>
            </div>
          </div>
          {/* about */}
          <div className="bg-white dark:bg-gray-800 py-2 md:px-6">
            <div className="w-full flex items-center flex-wrap pt-4 ">
              <div id="store" className="w-full top-0  sm:py-1">
                <div className="w-full  flex flex-wrap items-center justify-between mt-0  py-3">
                  <div className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 dark:text-gray-200 text-xl">
                    About
                  </div>
                  <div
                    className="flex gap-8 items-center"
                    id="store-nav-content"
                  >
                    <div className="flex gap-1 items-center">
                      {renderStars()}
                    </div>
                    <p className="text-gray-100 text-sm text-bold shadow-xs px-3 py-2 bg-[#005761] rounded-md">
                      Avg. Rating: <span className="text-white">4/30</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full">
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-2">
                  <div className="col-span-2 lg:col-span-2 p-2">
                    <p className="mb-6  text-gray-800 dark:text-gray-200">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fusce a bibendum ante. Morbi scelerisque posuere enim, at
                      dignissim eros semper vitae. Integer justo purus,
                      elementum in hendrerit eu, ornare nec erat. Quisque quis
                      ultrices orci, id mattis eros. Aenean urna augue, congue
                      vel turpis ut, vestibulum blandit arcu.
                      <br /> <br />
                      Quisque quis ultrices orci, id mattis eros. Aenean urna
                      augue, congue vel turpis ut, vestibulum blandit arcu.
                    </p>
                    <div className="flex space-x-4 ">
                      <button className="bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 px-4 py-2 rounded-md cursor-pointer ">
                        Send Message
                      </button>
                      <div className=" bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 items-center rounded-md justify-center flex">
                        <FaPhone className="w-8 h-8 py-2 px-2" />
                        <button className=" px-2 py-2 rounded-md hover:shadow-md">
                          +123 456 7890
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-2 lg:col-span-2  mb-4 sm:mb-0 rounded-md shadow-md">
                    <img
                      src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnVybml0dXJlJTIwZGVzaWdufGVufDB8fDB8fHww"
                      alt="Image One"
                      className="w-full h-full object-cover rounded-md shadow-md"
                    />
                  </div>

                  <div className="col-span-2 lg:col-span-2   rounded-md shadow-md">
                    <img
                      src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnVybml0dXJlJTIwZGVzaWdufGVufDB8fDB8fHww"
                      alt="Image One"
                      className="w-full h-full object-cover rounded-md shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* footer */}
          <div className=" bg-white dark:bg-gray-800 py-2 md:px-4 border-t border-gray-400">
            <div className="container flex px-3 py-8 ">
              <div className="w-full mx-auto flex flex-wrap">
                {/* Map Section */}
                <div className="flex w-full lg:w-3/4">
                  <div className="w-full px-3 md:px-0">
                    <h3 className="font-bold uppercase text-gray-900 dark:text-gray-100">
                      Find Us
                    </h3>
                    <div className="py-4  ">
                      <iframe
                        className="rounded-2xl shadow-md "
                        title="Google Maps Location"
                        width="100%"
                        height="250"
                        loading="lazy"
                        allowFullScreen
                        frameBorder="0"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.1316762062283!2d-86.1348954857093!3d39.77807437944789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b50f17baf14cb%3A0x68b4c144ed06cd64!2sIndianapolis%2C%20IN%2C%20USA!5e0!3m2!1sen!2sin!4v1622730871727!5m2!1sen!2sin"
                      ></iframe>
                    </div>
                  </div>
                </div>

                <div className="flex w-full lg:w-1/4 lg:justify-end items-center lg:text-right mt-6 md:mt-0">
                  <div className="px-3 md:px-0">
                    <div className="py-2">
                      <h3 className="uppercase text-left lg:text-right font-bold text-gray-900 dark:text-gray-200">
                        Address
                      </h3>
                      <p className="text-gray-700 dark:text-gray-400">
                        1234 Main St, Suite 100
                        <br />
                        Springfield, IL 62704
                        <br />
                        USA
                      </p>
                    </div>

                    <div className="w-full flex items-center justify-start lg:justify-end py-4 mt-0 gap-4">
                      <FaFacebook className="w-7 h-7" />
                      <FaInstagram className="w-7 h-7" />
                      <FaYoutube className="w-8 h-8" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ProductsVendorPage;
