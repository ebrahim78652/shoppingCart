import React from "react";
import { Header } from "../shared/Header";
import { ProductDetails } from "../shared/ProductDetails";
import { useNavigate } from "react-router-dom";

export const Details = (props) => {
  const navigate = useNavigate();

  const onContinueClick = () => {
    navigate("/shop");
  };

  const onFinishClick = () => {
    navigate("/checkout");
  };

  return (
    <>
      <ProductDetails currentSelectedPlant={props.currentSelectedPlant} />
      <div className="navbuttons">
        <div onClick={onContinueClick} className="continue">
          Continue Shopping
        </div>
        <div onClick={onFinishClick} className="finish_shopping">
          Finish Shopping
        </div>
      </div>
    </>
  );
};
