import React from "react";
import "./styles.scss";
import cartSvg from "../../assets/cart.svg";
import { useCartContext } from "../../contexts/CartContext";

const ProductCard = ({ product }) => {
  const { name, prices, gallery, inStock } = product;

  const { addItem } = useCartContext();

  const handleAddToCart = () => addItem(product);

  return (
    <div
      className={`product-card ${
        !product.inStock ? "out-of-stock" : ""
      } flex flex-col items-start justify-center p-6 w-[386px] h-[444px] relative`}
      data-testid={`product-${product.key}`}>
      <div className="overflow-hidden bg-gray-300 w-full h-[330px] relative">
        <img
          src={gallery[0]}
          alt={product.name}
          className={`object-cover w-full h-full ${
            !inStock ? "grayscale opacity-50" : ""
          }`}
        />
        {!inStock && (
          <div className="overlay absolute inset-0 bg-gray-200 bg-opacity-75 flex items-center justify-center text-gray-800 text-xl font-semibold">
            OUT OF STOCK
          </div>
        )}
      </div>
      <div className="mt-4 w-full relative">
        <h2 className="font-raleway text-lg">{name}</h2>
        <p className="font-raleway text-base">${prices[0].amount}</p>

        {inStock && (
          <button
            data-testid="cart-btn"
            className="quick-shop-btn absolute -top-8 right-4"
            onClick={handleAddToCart}>
            <img src={cartSvg} alt="cart icon" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
