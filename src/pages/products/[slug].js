import React, { useState, useEffect } from "react";
import { IoStar, IoStarOutline, IoStarHalf } from "react-icons/io5";
import QuantityInput from "../../app/components/QuantityInput";
import ProductDetailsCarousel from "../../app/components/ProductDetailsCarousel";
import ProductAccordion from "../../app/components/ProductAccordion";
import Layout from "../layout";
import { useRouter } from "next/router";
import { cardData } from "../../data.js";
import { MdOutlineAddHome } from "react-icons/md";

const ProductDetails = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [rating, setRating] = useState(4);

  const product = cardData.find((item) => item.productSlug === slug);
  if (!product) {
    return <p>Product not found</p>;
  }

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
    <>
      <Layout>
        <div className="bg-white dark:bg-gray-800 py-2">
          <div className="flex items-center flex-wrap md:px-4 px-2 ">
            {/* <div className=" "> */}
            <div className=" w-full flex flex-col lg:flex-row md:px-10 gap-2 md:justify-between">
              <div className="w-full md:w-auto mx-auto flex-[1.5] max-w-[500px] lg:w-auto lg:max-h-[800px]  lg:mx-auto justify-center items-center">
                <ProductDetailsCarousel product={product} />
              </div>

              <div className="flex-[1] justify-end max-w-[700px]">
                <div className="md:hidden flex justify-between items-start border-b border-t border-gray-200 dark:border-gray-700 py-2">
                  <div className="text-sm font-medium text-gray-400">
                    <div className="flex gap-1 items-center">
                      <MdOutlineAddHome className="text-gray-600 dark:text-gray-200" />
                      <p className="text-sm font-medium text-gray-400">
                        {product.vendor}
                      </p>
                    </div>
                    <div className="flex gap-1 items-center">
                      {renderStars()}
                    </div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <button className="bg-gray-800 h-[4vh] dark:bg-gray-200 dark:text-gray-800 text-white px-2 py rounded-md cursor-pointer text-sm ">
                      Follow
                    </button>
                  </div>
                </div>
                {/* PRODUCT TITLE */}
                <div className="text-[24px] text-gray-800 dark:text-gray-200 mt-2 mb-2 leading-tight">
                  {product.productName}
                </div>

                {/* PRODUCT DESCRIPTION*/}
                <div className="text-sm font-normal mb-5 text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>

                {/* PRODUCT PRICE */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-2 items-center">
                    <span className="text-2xl font-bold text-gray-800 dark:text-gray-800 mr-2">
                      Rs. {product.sellingPrice}
                    </span>
                    <span className="text-xs text-slate-400 line-through mt-2">
                      Rs. {product.markedPrice}
                    </span>
                    <p className="ml-auto mt-1 text-base font-medium text-green-500">
                      [ 10 % off ]
                    </p>
                  </div>
                  <QuantityInput />
                </div>

                <div className="text-sm font-medium text-gray-400">
                  incl. of taxes
                </div>

                <div className="flex justify-between">
                  <div className="text-sm font-medium text-gray-400 mb-4">
                    {`(Also includes all applicable duties)`}
                  </div>
                  <div>
                    <div className="flex gap-1 items-center">
                      {renderStars()}
                    </div>
                  </div>
                </div>

                {/* ADD TO CART BUTTON START */}
                <button
                  className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-4 hover:opacity-75"
                  onClick={() => alert("Added to cart")} // Add a function or logic for the onClick event
                >
                  Add to Cart
                </button>
                {/* ADD TO CART BUTTON END */}

                <ProductAccordion product={product} />
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ProductDetails;
