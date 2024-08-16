import React from "react";
import "./CartItem.css";

const CartItem = ({ item }) => {
  return (
    <div className="cart-item-container">
      <div>
        <img src={item.image} alt={item.title} width="100%" height="100px" />
      </div>
      <div className="cart-title">
        <h6>{item.title}</h6>
      </div>
      <div className="cart-price">
        <p>${item.price.toFixed(2)}</p>
      </div>
      <input type="number" min="1" value={item.quantity} />
    </div>
  );
};

export default CartItem;
