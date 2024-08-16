import React from "react";
import "./Navbar.css";

const Navbar = ({ cart }) => {
  return (
    <nav className="navBar">
      <div>
        <h4>E-Commerce</h4>
      </div>
      <div>
        <div>Cart:{cart.length} items</div>
      </div>
    </nav>
  );
};

export default Navbar;
