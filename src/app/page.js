"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cardData } from "../data";
import Masonry from "./components/Masonry";
import Category from "./components/Category";
export default function Home() {
  const [item, setItem] = useState(0);
  const [active, setActive] = useState(0);
  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };
  const homeMenu = [
    "Trending",
    "Most Selling",
    "New Arrivals",
    "Highest Rated",
    "Limited Offer",

    "Free Shipping",
  ];
  return (
    <div className="w-full px-2 items-center justify-center min-h-screen">
      <div>
        <ul
          className={`w-full flex flex-row md:justify-center justify-start items-center text-[#005761] overflow-hidden hover:overflow-x-scroll whitespace-nowrap flex-container`}
        >
          {homeMenu.map((item, index) => {
            return (
              <div key={index}>
                <li
                  onClick={(e) => handleClick(e, index)}
                  className="cursor-pointer capitalize px-1 py-2 mt-2"
                >
                  <span
                    className={`capitalize py-2 px-3 rounded-md text-sm font-medium whitespace-nowrap  transition-transform transform hover:scale-105 ${
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
