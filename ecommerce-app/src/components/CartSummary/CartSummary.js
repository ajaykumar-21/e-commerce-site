import React from "react";

const CartSummary = ({ cart }) => {
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h3>Cart Summary</h3>
      <p>SubTotal: ${subtotal.toFixed(2)}</p>
      <p>Total: ${subtotal.toFixed(2)}</p>
    </div>
  );
};

export default CartSummary;
