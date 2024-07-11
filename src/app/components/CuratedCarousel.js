import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  curatedCardData,
  curatedResponsive,
  collectionResponsive,
  flashdealResponsive,
  productCollectionResponsive,
} from "../../data";
import Reels from "./Reels";
import CarouselCard from "./CarouselCard";
import CollectionCard from "./CollectionCard";
import ProductCollectionCard from "./ProductCollectionCard";
import ProductCollectionCarousel from "./ProductCollectionCarousel";

const CuratedCarousel = ({
  type,
  imageUrl,
  productName,
  markedPrice,
  sellingPrice,
  vendor,
}) => {
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
      {type === "flashdeal" && (
        <div className="container mx-auto relative z-10">
          <div className=" ">
            <Carousel
              responsive={flashdealResponsive}
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
      )}
      {/* {type === "productCollection" && (
        <div className="container mx-auto relative z-10">
          <div className=" ">
            <Carousel
              responsive={productCollectionResponsive}
              containerClass=""
              itemClass="px-[2px]"
            >
              {imageUrl.map((url, index) => (
                <ProductCollectionCarousel
                  key={index}
                  imageUrl={url}
                  
                  
                />
              ))}
             
            </Carousel>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default CuratedCarousel;
