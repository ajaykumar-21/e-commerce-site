import React from "react";
import "./CartItem.css";

const CartItem = ({ item }) => {
  return (
    <div className="cart-item-container">
      <img src={item.image} alt={item.title} width="100%" height="100px" />
      <h6>{item.title}</h6>
      <p>${item.price.toFixed(2)}</p>
      <input type="number" min="1" value={item.quantity} />
    </div>
  );
};

export default CartItem;
