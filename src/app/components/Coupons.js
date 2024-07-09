import React from "react";
import { CampaignCardsContent, responsive } from "../../data.js";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Coupons = () => {
  return (
    <div className=" mt-0 z-10 ">
      <div className="px-0 py-2">
        <Carousel
          responsive={responsive}
          containerclassName="-mx-[2px]"
          itemclassName="px-[2px]"
        >
          {CampaignCardsContent.map((card, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 py-2 b flex justify-center items-center mt-2"
            >
              <div className="relative w-[90%] border h-35 rounded overflow-hidden mx-auto shadow-md shadow-gray-300 flex items-stretch text-uppercase ">
                <div className="w-1/6 border-r-2 border-dashed border-gray-200 bg-white dark:bg-gray-800 flex items-center justify-center ">
                  <div className="transform -rotate-90 whitespace-nowrap  text-gray-800 dark:text-gray-200 text-sm">
                    {card.title}
                  </div>
                  <div class="w-10 h-10 bg-gray-200  rounded-full absolute top-1/2 transform -translate-y-1/2 left-0 -ml-6 z-10"></div>
                </div>
                <div className="mb-4 flex-grow text-center flex flex-col justify-center  text-gray-800">
                  <div className=" bg-white dark:bg-gray-800">
                    <h2 className=" text-[#ffd700] px-2 py-2 text-2xl">
                      {card.earning} OFF
                    </h2>
                    <h3 className="px-1 py-2 text-md text-gray-600 dark:text-gray-200">
                      {card.description}
                    </h3>
                    <div className="mt-0 lg:flex-shrink-0">
                      <div className="inline-flex rounded-md shadow">
                        <button
                          type="button"
                          className="py-1 px-4  dark:bg-gray-600 bg-gray-200 hover:text-white text-gray-800 dark:text-gray-200  w-full transition ease-in duration-200 text-center text-sm rounded-md  "
                        >
                          Get started
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-10 dark:bg-white bg-gray-400 flex items-center justify-center">
                  <div className="text-gray-800 text-xs font-normal transform -rotate-90 font-barcode whitespace-nowrap">
                    Valid until May, 2023
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Coupons;
