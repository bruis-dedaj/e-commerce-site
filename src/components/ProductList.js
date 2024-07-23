// src/components/ProductList.js
import React from "react";
import ProductCard from "./ProductCard";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../graphql/queries";

const ProductList = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  console.log("ProductList rendered");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="product-list">
      {data.products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
