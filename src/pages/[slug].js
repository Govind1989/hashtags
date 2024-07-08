import React from "react";
import { useRouter } from "next/router";
import CategoryPage from "../app/components/CategoryPage";

import NotFound from "../app/components/NotFound";
import { cardData } from "../data.js";
import VendorPage from "../app/components/VendorPage.js";

const Index = () => {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) {
    return <div>Loading...</div>;
  }

  // Define the categories you want to render CategoryPage for
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
  ]; // Add more as needed
  if (slug) {
    const vendorSlug = cardData.find((item) => item.vendorSlug === slug);

    const vendorCategory = vendorSlug
      ? vendorSlug.mainCategory.toLowerCase()
      : null;

    // Check if the slug matches a valid category or vendorSlug
    if (validCategories.includes(slug)) {
      return <CategoryPage slug={slug} />;
    } else if (vendorSlug) {
      return <VendorPage slug={slug} vendorCategory={vendorCategory} />;
    } else {
      return <NotFound slug={slug} />;
    }
  }
};

export default Index;
