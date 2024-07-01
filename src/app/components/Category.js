"use Client";
import React, { useState } from "react";

const Category = ({ categories }) => {
  const [item, setItem] = useState(0);

  const [active, setActive] = useState(0);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };
  return (
    <>
      <div className="grid grid-cols-12 ml-0 md:ml-2 xl:ml-8 lg:ml-12">
        <div className="lg:col-span-1 md:col-span-2 col-span-3 py-0 justify-center md:order-first mt-1   ">
          <div className="flex flex-shrink-0 gap-2 px-6 py-4 shadow-lg rounded-md items-center justify-center">
            <span className="text-gray-800 text-sm hidden md:block ">
              Filter
            </span>
            <svg
              aria-label="filter"
              class="AR6 gUZ U9O kVc"
              height="16"
              role="img"
              viewBox="0 0 24 24"
              width="16"
            >
              <path d="M9 19.5A1.75 1.75 0 1 1 9 16a1.75 1.75 0 0 1 0 3.5M22.25 16h-8.32a5.24 5.24 0 0 0-9.86 0H1.75a1.75 1.75 0 0 0 0 3.5h2.32a5.24 5.24 0 0 0 9.86 0h8.32a1.75 1.75 0 0 0 0-3.5M15 4.5A1.75 1.75 0 1 1 15 8a1.75 1.75 0 0 1 0-3.5M1.75 8h8.32a5.24 5.24 0 0 0 9.86 0h2.32a1.75 1.75 0 0 0 0-3.5h-2.32a5.24 5.24 0 0 0-9.86 0H1.75a1.75 1.75 0 0 0 0 3.5"></path>
            </svg>
          </div>
        </div>
        <div className="lg:col-span-11 md:col-span-9 col-span-9 py-0 items-center ">
          <ul className="w-full flex flex-row md:justify-start justify-start items-center text-[#005761] overflow-hidden hover:overflow-x-scroll whitespace-nowrap flex-container">
            {categories.map((item, index) => {
              return (
                <li
                  onClick={(e) => handleClick(e, index)}
                  className={`cursor-pointer capitalize p-4`}
                  key={index}
                >
                  <span
                    className={`capitalize py-3 px-3  rounded-md text-sm  font-medium whitespace-nowrap shadow-md transition-transform transform hover:scale-105${
                      active === index ? " border-b-[#005761] border-b-2" : ""
                    }`}
                  >
                    {item}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Category;
