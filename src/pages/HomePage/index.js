import React, { useState } from "react";
import "./styles.scss";
import RootLayout from "../../components/Layouts/RootLayout";
import ProductList from "../../components/ProductList";
import { products } from "../../constants/data";
import ProductCard from "../../components/ProductCard";
import { useCategoryContext } from "../../contexts/CategoryContext";

/**
 *
 * @returns wrapper layout for the all shopping pages
 */
const HomePage = () => {
  const { category } = useCategoryContext();
  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <RootLayout className="home pt-16">
      <div className="max-w-7xl mx-auto mt-10 mb-10">
        <h1 className="text-3xl mb-8 font-raleway">{categoryName} </h1>
        <div className="grid grid-cols-3 gap-4">
          {products
            .filter((item) => {
              if (category === "all") return item;
              return item.category === category;
            })
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </RootLayout>
  );
};

export default HomePage;
