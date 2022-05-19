import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <div className="store_title">Blumen</div>

      <nav>
        <ul>
          <Link to="/home">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/checkout">Checkout</Link>
        </ul>
      </nav>
    </div>
  );
};
