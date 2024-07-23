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
  return (
    <RootLayout className="home">
      {/* All products */}
      <h1>All Products {category}</h1>
      <div className="grid grid-cols-4 gap-4">
        {products
          .filter((item) => {
            if (category === "all") return item;
            return item.category === category;
          })
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </RootLayout>
  );
};

export default HomePage;
