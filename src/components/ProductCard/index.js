import React from "react";
import "./styles.scss";

const ProductCard = ({ product }) => {
  console.log("ProductCard rendered for", product);
  const { name, prices, gallery, inStock } = product;
  return (
    <div
      className={`product-card ${
        !product.inStock ? "out-of-stock" : ""
      } flex flex-col items-start justify-center p-2 w-[386] h-[444px]`}
      data-testid={`product-${product.key}`}>
      <div className="overflow-hidden bg-gray-300">
        <img
          src={gallery[0]}
          alt={product.name}
          width={354}
          height={330}
          className="object-cover"
        />
      </div>

      <h2>{name}</h2>
      <p>${prices[0].amount}</p>
      {inStock && (
        <button data-testid="cart-btn" className="quick-shop-btn">
          <span role="img" aria-label="cart">
            🛒
          </span>
        </button>
      )}
      {/* absolute */}
      {!inStock && <div className="overlay">OUT OF STOCK</div>}
    </div>
  );
};

export default ProductCard;
