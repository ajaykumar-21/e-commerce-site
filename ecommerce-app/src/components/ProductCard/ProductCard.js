import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="card-wrapper">
      <img
        src={product.image}
        alt={product.title}
        width="100%"
        height="200px"
      />
      <h4>{product.title}</h4>
      <p>${product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
