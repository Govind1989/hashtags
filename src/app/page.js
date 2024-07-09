"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cardData } from "../data";
import Masonry from "./components/Masonry";
import Category from "./components/Category";
export default function Home() {
  const [item, setItem] = useState(0);
  const [active, setActive] = useState(0);
  const [isFilter, setIsFilter] = useState(false);
  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };
  const toggleFilter = () => {
    setIsFilter(!isFilter);
  };
  const homeMenu = [
    "Trending",
    "Most Selling",
    "New Arrivals",
    "Highest Rated",
    "Limited Offer",

    "Free Shipping",
  ];

  const categoryMenu = [
    "Wearables",
    "Foods",
    "Furnitures",
    "Electronics & Accessories",
    "Computers & Accessories",
    "Mobiles & Accessories",
    "Services",
    "Holidays",
    "Appointments",
  ];

  const menu = isFilter ? categoryMenu : homeMenu;
  return (
    <div className="w-full dark:bg-gray-800 px-2 items-center justify-center min-h-screen">
      <div className="flex flex-row gap-0 ">
        <div
          className={`md:justify-center justify-start px-2 py-2 border-r-2 border-[#eae2b4] rounded-tl-xl rounded-bl-xl ${
            isFilter
              ? "bg-gray-500 dark:bg-gray-500"
              : "bg-white dark:bg-gray-700"
          } `}
        >
          <button
            onClick={toggleFilter}
            className={`flex flex-shrink-0 gap-2 px-2  rounded-md items-center mt-2 justify-center relative group `}
          >
            <span className="text-gray-800 dark:text-gray-200 text-sm hidden md:block ">
              Categories
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
          </button>
        </div>
        <ul
          className={`w-full flex flex-row  justify-start items-center text-[#005761] overflow-hidden hover:overflow-x-scroll whitespace-nowrap flex-container`}
        >
          {menu.map((item, index) => {
            return (
              <div key={index}>
                <li
                  onClick={(e) => handleClick(e, index)}
                  className="cursor-pointer capitalize px-1 py-2 mt-2"
                >
                  <span
                    className={`capitalize py-2 px-3 dark:text-gray-200 rounded-md text-sm font-medium whitespace-nowrap  transition-transform transform hover:scale-105 ${
                      active === index
                        ? `border-[#005761] border-b-2`
                        : `shadow-md`
                    }`}
                  >
                    {item}
                  </span>
                </li>
                <hr className="border-gray-200 dark:border-gray-700" />
              </div>
            );
          })}
        </ul>
      </div>

      <Masonry cardData={cardData} page="Home" />
    </div>
  );
}
