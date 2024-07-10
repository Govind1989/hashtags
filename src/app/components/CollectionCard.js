import Link from "next/link";
import React from "react";

const CollectionCard = () => {
  return (
    <div className="w-full">
      <div className="w-full relative mb-4 sm:mb-8 h-[370px] md:h-[462px]">
        <img
          src="https://themes.rslahmed.dev/rafcart-tailwind/assets/images/banner-1.jpg"
          alt="Furniture-one"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute left-0 top-0 flex h-full w-full items-center px-8 md:px-12">
          <div className="max-w-[420px] w-[200px] sm:w-full">
            <span className="mb-3 block text-base font-medium text-body-color">
              #Clearance Sale
            </span>
            <h3>
              <Link
                href="#"
                className="mb-5 block text-2xl font-bold text-dark hover:text-primary sm:text-4xl"
              >
                Elegant sofa&apos;s collection
              </Link>
            </h3>
            <p className="mb-9 text-base text-body-color">
              Home is where comfort is. Explore our exquisite collections
            </p>
            <button
              type="button"
              className="py-1 px-4 bg-gray-800 hover:bg-gray-200 text-white hover:text-gray-800  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
