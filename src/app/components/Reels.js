import React, { useState } from "react";
import { IoStar, IoStarOutline, IoStarHalf } from "react-icons/io5";
import Link from "next/link";

import { MdOutlineAddHome } from "react-icons/md";
const Reels = ({}) => {
  const [rating, setRating] = useState(4);

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<IoStar key={i} className="text-gray-200 w-4 h-4" />);
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        stars.push(<IoStarHalf key={i} className="text-gray-200 w-4 h-4" />);
      } else {
        stars.push(<IoStarOutline key={i} className="text-gray-200 w-4 h-4" />);
      }
    }
    return stars;
  };
  return (
    <>
      <div className=" h-auto sm:py-6 flex flex-wrap  relative rounded-md">
        <div className="relative group">
          <img
            className="hover:grow hover:shadow-lg"
            src="https://images.unsplash.com/photo-1542992015-8b34590ec327?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z3JhbmQlMjBzYWxlfGVufDB8MXwwfHx8MA%3D%3D"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-start justify-end opacity-100 group-hover:opacity-70 transition-opacity duration-300 rounded-lg p-4">
            <Link href={`/elegant-apparel`} className="flex flex-col gap-1 ">
              <div className="flex items-center gap-1">
                <MdOutlineAddHome className="text-white" />
                <p className="leading-4 text-sm text-white">Elegant Apparel</p>
              </div>
              <div className="flex gap-1 items-center">{renderStars()}</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reels;
