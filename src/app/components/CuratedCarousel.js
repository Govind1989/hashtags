import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  curatedCardData,
  curatedResponsive,
  collectionResponsive,
} from "../../data";
import Reels from "./Reels";
import CarouselCard from "./CarouselCard";
import CollectionCard from "./CollectionCard";

const CuratedCarousel = ({ type }) => {
  return (
    <div className="container mx-auto relative z-10">
      {type === "curated" && (
        <div className=" ">
          <Carousel
            responsive={curatedResponsive}
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
      )}
      {type === "collection" && (
        <div className="container mx-auto relative z-10">
          <div className=" ">
            <Carousel
              responsive={collectionResponsive}
              containerClass=""
              itemClass="px-[2px]"
            >
              {/* {curatedCardData.map((item, index) => ( */}
              <CollectionCard />
              <CollectionCard />
              <CollectionCard />
              {/* ))} */}
            </Carousel>
          </div>
        </div>
      )}
    </div>
  );
};

export default CuratedCarousel;
