import React, { useState } from "react";
import { IoStar, IoStarOutline, IoStarHalf } from "react-icons/io5";
import { MdOutlineAddHome, MdOutlinePhone } from "react-icons/md";

const ProductAccordion = ({ product }) => {
  const [openSection, setOpenSection] = useState(1);
  const [rating, setRating] = useState(4);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<IoStar key={i} className="text-gray-400 w-4 h-4" />);
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        stars.push(<IoStarHalf key={i} className="text-gray-400 w-4 h-4" />);
      } else {
        stars.push(<IoStarOutline key={i} className="text-gray-400 w-4 h-4" />);
      }
    }
    return stars;
  };

  return (
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
          <span>Vendor Information</span>
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
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm font-medium text-gray-400">
                  {product.vendor}
                </span>
                <div className="flex gap-1 items-center">{renderStars()}</div>
              </div>

              <div className="flex justify-between">
                <div className="flex flex-col">
                  <div className="flex gap-2">
                    <MdOutlineAddHome className="text-gray-600" />
                    <p className="text-sm font-medium text-gray-400">
                      Milan Chowk, Bhairahawa
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <MdOutlinePhone className="text-gray-600" />
                    <p className="text-sm font-medium text-gray-400">
                      9849334422
                    </p>
                  </div>
                </div>
                <button className="bg-gray-800 h-[6vh] text-white px-2 py rounded-md cursor-pointer text-sm ">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 id="accordion-flush-heading-2">
        <button
          type="button"
          className={`flex justify-between items-center py-5 w-full font-medium text-left rounded-t-xl border-b border-gray-200 dark:border-gray-700 ${
            openSection === 2
              ? "text-gray-900 dark:text-white"
              : "text-gray-500 dark:text-gray-400"
          }`}
          onClick={() => toggleSection(2)}
          aria-expanded={openSection === 2}
          aria-controls="accordion-flush-body-2"
        >
          <span>Product Informations</span>
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
        id="accordion-flush-body-2"
        aria-labelledby="accordion-flush-heading-2"
        className={openSection === 2 ? "" : "hidden"}
      >
        <div className="py-2 border-b border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
            <div className="px-2">
              <p className="text-sm text-gray-400 mb-2 font-light">
                <span className="text-sm font-medium text-gray-400">
                  Material:
                </span>{" "}
                High-quality steel
              </p>
            </div>
            <div className="px-2">
              <p className="flex flex-row gap-2">
                <span className="text-sm font-medium text-gray-400">
                  Color:
                </span>
                <span className="inline-block w-4 h-4 bg-gray-800 rounded-full"></span>
              </p>
            </div>
            <div className="px-2">
              <p className="text-sm text-gray-400 mb-2 font-light">
                <span className="font-bold">Dimensions:</span> 20 x 40 x 50
              </p>
            </div>
            <div className="px-2">
              <p className="text-sm text-gray-400 mb-2 font-lights">
                <span className="font-bold">Weight:</span> 300 gram
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2 id="accordion-flush-heading-3">
        <button
          type="button"
          className={`flex justify-between items-center py-5 w-full font-medium text-left border-b border-gray-200 dark:border-gray-700 ${
            openSection === 3
              ? "text-gray-900 dark:text-white"
              : "text-gray-500 dark:text-gray-400"
          }`}
          onClick={() => toggleSection(3)}
          aria-expanded={openSection === 3}
          aria-controls="accordion-flush-body-3"
        >
          <span>Reviews and Comments</span>
          <svg
            data-accordion-icon
            className={`w-6 h-6 transform ${
              openSection === 3 ? "rotate-180" : ""
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
        id="accordion-flush-body-3"
        className={openSection === 3 ? "" : "hidden"}
        aria-labelledby="accordion-flush-heading-3"
      >
        <div className="py-2 border-b border-gray-200 dark:border-gray-700">
          <div className="h-[20vh] overflow-y-scroll bg-white px-2 custom-hr-scroll">
            <div className="border-b border-gray-200">
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm font-medium text-gray-400">
                  Manish Dhungel
                </span>
                <span className="text-xs font-medium text-gray-400">
                  one month ago..
                </span>
              </div>

              <p className="text-sm text-gray-400 mb-2 font-light">
                &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.&quot;
              </p>
            </div>
            <div className="border-b border-gray-200">
              <div className="pt-2 flex justify-between items-start mb-2">
                <span className="text-sm font-medium text-gray-400">
                  Ranjan Panthi
                </span>
                <span className="text-xs font-medium text-gray-400">
                  12 Feb, 2022
                </span>
              </div>

              <p className="text-sm text-gray-400 mb-2 font-light">
                &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAccordion;
