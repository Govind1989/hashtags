import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ProductDetailsCarousel = ({ product }) => {
  return (
    <div className="text-white text-[20px] w-full mx-auto sticky top-[50px] items-center">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel"
      >
        <div className="flex items-center h-[600px]">
          <img
            className="object-contain h-full"
            src={product.imageUrl}
            alt="Product"
          />
        </div>
        <div className="flex items-center h-[600px]">
          <img
            className="object-contain h-full"
            src="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
            alt="Sample"
          />
        </div>
        <div className="flex items-center h-[600px]">
          <img
            className="object-contain h-full"
            src="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
            alt="Sample"
          />
        </div>
        <div className="flex items-center h-[600px]">
          <img
            className="object-contain h-full"
            src="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
            alt="Sample"
          />
        </div>
        <div className="flex items-center h-[600px]">
          <img
            className="object-contain h-full"
            src="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
            alt="Sample"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default ProductDetailsCarousel;
