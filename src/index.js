// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";
import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";
import "./index.css";
import { CategoryContextProvider } from "./contexts/CategoryContext";
import { CartContextProvider } from "./contexts/CartContext";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/products/:productId",
    element: <ProductDetails />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <CartContextProvider>
        <CategoryContextProvider>
          <RouterProvider router={router} />
        </CategoryContextProvider>
      </CartContextProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
