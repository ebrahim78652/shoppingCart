import React from "react";
import { Header } from "../shared/Header";
import { ProductDetails } from "../shared/ProductDetails";
import { useNavigate } from "react-router-dom";

export const Checkout = () => {
  const navigate = useNavigate();

  const onContinueClick = () => {
    navigate("/shop");
  };

  const onPayClick = () => {
    navigate("/home");
  };

  return (
    <>
      <ProductDetails />
      <ProductDetails />
      <div className="navbuttons">
        <div onClick={onContinueClick} className="continue">
          Continue Shopping
        </div>
        <div onClick={onPayClick} className="pay">
          Pay
        </div>
      </div>
    </>
  );
};
