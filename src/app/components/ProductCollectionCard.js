import React from "react";

const ProductCollectionCard = ({ imageUrl }) => {
  return (
    <div
      className="relative h-64 md:h-80 lg:h-96 bg-cover bg-center rounded-md "
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
  );
};

export default ProductCollectionCard;
