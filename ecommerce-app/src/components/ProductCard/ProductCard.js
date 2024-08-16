import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="card-wrapper">
      <img
        src={product.image}
        alt={product.title}
        width="100%"
        height="200px"
      />
      <div className="card-title">
        <h5>{product.title}</h5>
      </div>
      <div className="card-price">
        <p className="card-price">${product.price}</p>
      </div>
      <button onClick={() => addToCart(product)} className="btn-add-to-cart">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
