import React from "react";
import { Link } from "react-router-dom";

export const Header = (props) => {
  return (
    <div className="header">
      <div className="store_title">Blumen</div>

      <nav>
        <ul>
          <Link to="/home">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link className="cart" to="/checkout">
            <img className="cart_icon" src="/cart_icon.svg" alt="" />
            <div className="amountInCart">{props.getTotalNumProducts()}</div>
          </Link>
        </ul>
      </nav>
    </div>
  );
};
