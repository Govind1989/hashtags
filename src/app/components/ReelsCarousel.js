import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import CardL from "../Common/CardL.js";
import Reels from "./Reels";

const ReelsCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1023, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 2,
    },
  };
  return (
    <div className="container mx-auto ">
      <div className=" ">
        <Carousel
          responsive={responsive}
          containerClass=""
          itemClass="px-[2px]"
        >
          {/* {products?.data?.map((product) => ( */}
          <Reels />
          <Reels />
          <Reels />
          <Reels />
          <Reels />
          {/* ))} */}
        </Carousel>
      </div>
    </div>
  );
};

export default ReelsCarousel;
