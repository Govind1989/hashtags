import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { curatedCardData } from "../../data";
import Reels from "./Reels";
import CarouselCard from "./CarouselCard";

const CuratedCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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
    <div className="container mx-auto relative z-10">
      <div className=" ">
        <Carousel
          responsive={responsive}
          containerClass=""
          itemClass="px-[2px]"
        >
          {curatedCardData.map((item, index) => (
            <CarouselCard
              key={index}
              imageUrl={item.imageUrl}
              productName={item.productName}
              productSlug={item.productSlug}
              markedPrice={item.markedPrice}
              sellingPrice={item.sellingPrice}
              vendor={item.vendor}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CuratedCarousel;
