import React, { useState } from "react";
import ProductsVendorPage from "./VendorsUI/ProductsVendorPage";
import FoodsVendorPage from "./VendorsUI/FoodsVendorPage";
import ServicesVendorPage from "./VendorsUI/ServicesVendorPage";
import NotFound from "./NotFound";
const categoryComponents = {
  wearables: ProductsVendorPage,
  foods: FoodsVendorPage,
  furnitures: ProductsVendorPage,
  electronics: ProductsVendorPage,
  computers: ProductsVendorPage,
  mobiles: ProductsVendorPage,
  services: ServicesVendorPage,
  holidays: ServicesVendorPage,
  appointments: ServicesVendorPage,
};
const validCategories = [
  "wearables",
  "foods",
  "furnitures",
  "electronics",
  "computers",
  "mobiles",
  "services",
  "holidays",
  "appointments",
];
const VendorPage = ({ slug, vendorCategory }) => {
  // console.log(slug);
  const CategoryComponent = categoryComponents[vendorCategory];

  //   If the category is valid and the component exists, render it
  if (validCategories.includes(vendorCategory) && CategoryComponent) {
    return <CategoryComponent slug={slug} />;
  }

  return (
    <div>
      <NotFound slug={slug} />
    </div>
  );
};

export default VendorPage;
