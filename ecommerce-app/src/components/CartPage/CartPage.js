import React from "react";
import CartSummary from "../CartSummary/CartSummary";
import CartItem from "../CartItem/CartItem";
import "./CartPage.css";

const CartPage = ({ cart }) => {
  return (
    <div className="cart-page-container">
      <h2 className="cart-page-heading">Shopping Cart</h2>
      <div>
        {cart.length > 0 ? (
          <>
            <div className="cart-item-wrapper">
              {cart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
            <CartSummary cart={cart} />
          </>
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default CartPage;
