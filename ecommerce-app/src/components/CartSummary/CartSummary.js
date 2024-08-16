import React from "react";
import "./CartSummary.css";

const CartSummary = ({ cart }) => {
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-summary-conatiner">
      <div className="cart-summary-wrapper">
        <div className="cart-summary-heading">
          <h2>Cart Summary</h2>
        </div>
        <div className="cart-total">
          <p>
            {" "}
            <span className="sub-heading">SubTotal:</span>{" "}
            <span className="total-price">${subtotal.toFixed(2)} </span>
          </p>
          <p>
            <span className="sub-heading">Total:</span>{" "}
            <span className="total-price">${subtotal.toFixed(2)}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
