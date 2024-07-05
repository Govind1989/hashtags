"use client";
import React, { useState, useEffect } from "react";
// import { cardData } from "../../data.js"; // Ensure to import the cardData array
import Card from "./Card"; // Ensure to import the Card component

const Masonry = ({ cardData, slug, page }) => {
  const [containerHeight, setContainerHeight] = useState(
    page === "Home" ? 140 : 60
  ); // Initial height of 60rem
  const [isAllCardsVisible, setIsAllCardsVisible] = useState(false);

  // Calculate total height needed for all cards
  const totalCardCount = cardData.length;
  const cardsPerRow = 4; // Adjust this based on your layout (4 cards per row for large screens)
  const cardHeight = 15; // Adjust this value based on the approximate height of a card in rem
  const totalRows = Math.ceil(totalCardCount / cardsPerRow);
  const totalHeight = totalRows * cardHeight;

  useEffect(() => {
    if (containerHeight >= totalHeight) {
      setIsAllCardsVisible(true);
    } else {
      setIsAllCardsVisible(false);
    }
  }, [containerHeight, totalHeight]);

  const handleViewMore = () => {
    const cardHeight = 15; // Adjust this value based on the approximate height of a card in rem
    if (page === "Home") {
      setContainerHeight((prevHeight) => prevHeight + cardHeight * 6 + 18); // Increase height by 6 cards worth of height (adjust as needed)
    } else {
      setContainerHeight((prevHeight) => prevHeight + cardHeight * 4 + 12); // Increase height by 4 cards worth of height
    }
  };

  return (
    <div>
      <div
        className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-2 space-y-0 py-4 md:py-2 md:pl-8 overflow-hidden "
        style={{ maxHeight: `${containerHeight}rem` }}
      >
        {cardData.map((item, index) => (
          <Card
            key={index}
            imageUrl={item.imageUrl}
            productName={item.productName}
            markedPrice={item.markedPrice}
            sellingPrice={item.sellingPrice}
            vendor={item.vendor}
          />
        ))}
      </div>
      {!isAllCardsVisible && (
        <div className="flex justify-center ">
          <button
            className="text-gray-800 hover:text-gray-400 dark:text-gray-200 underline"
            onClick={handleViewMore}
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
};

export default Masonry;
