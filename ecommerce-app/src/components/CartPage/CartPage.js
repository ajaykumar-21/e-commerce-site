import React from "react";
import CartSummary from "../CartSummary/CartSummary";

const CartPage = ({ cart }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <div>
        <CartSummary cart={cart} />
      </div>
    </div>
  );
};

export default CartPage;
