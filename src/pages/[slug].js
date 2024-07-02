import React from "react";
import { useRouter } from "next/router";
import CategoryPage from "../app/components/CategoryPage";

import NotFound from "../app/components/NotFound";

const Index = () => {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) {
    return <div>Loading...</div>;
  }

  // Define the categories you want to render CategoryPage for
  const validCategories = ["wearables", "foods", "furnitures"]; // Add more as needed

  // Check if the slug is one of the valid categories
  if (validCategories.includes(slug)) {
    return <CategoryPage slug={slug} />;
  } else {
    return <NotFound slug={slug} />;
  }
};

export default Index;
