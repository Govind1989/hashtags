import React from "react";
import { productCollectionResponsive } from "../../data";
import ProductCollectionCard from "./ProductCollectionCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const ProductCollectionCarousel = ({ imageUrl, showHoverContent }) => {
  //   console.log(imageUrl);
  return (
    <div
      className={`container mx-auto relative ${
        showHoverContent ? "z-0" : "z-10"
      }`}
    >
      <div className=" ">
        <Carousel
          responsive={productCollectionResponsive}
          showDots={true}
          ssr={true} // means to render carousel on server-side.
          dotListClass="custom-dot-list-style"
          arrows={false}
          containerClass=""
          itemClass="px-[2px]"
        >
          {imageUrl.map((item, index) => (
            <ProductCollectionCard key={index} imageUrl={item} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ProductCollectionCarousel;
