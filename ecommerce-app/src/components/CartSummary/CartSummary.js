import React from "react";
import "./CartSummary.css";

const CartSummary = ({ cart, discountPercentage = 0 }) => {
  // Calculates the subtotal for all items in the cart
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Calculates the discount amount based on the subtotal and discount percentage
  const discountAmount = (subtotal * discountPercentage) / 100;

  // Calculates the total price after applying the discount
  const totalPrice = subtotal - discountAmount;

  return (
    <div className="cart-summary-container">
      <div className="cart-summary-wrapper">
        <div className="cart-summary-heading">
          <h2>Cart Summary</h2>
        </div>
        <div className="cart-total">
          <p>
            <span className="sub-heading">SubTotal:</span>{" "}
            <span className="total-price">${subtotal.toFixed(2)}</span>
          </p>
          {discountPercentage > 0 && (
            <p>
              <span className="sub-heading">
                Discount ({discountPercentage}%):
              </span>{" "}
              <span className="total-price">-${discountAmount.toFixed(2)}</span>
            </p>
          )}
          <p>
            <span className="sub-heading">Total:</span>{" "}
            <span className="total-price">${totalPrice.toFixed(2)}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
