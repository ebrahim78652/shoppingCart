import React from "react";
import { Header } from "../shared/Header";
import { ProductDetails } from "../shared/ProductDetails";
import { useNavigate } from "react-router-dom";

export const Checkout = ({ getProducts, getTotal }) => {
  const products = getProducts();
  const totalPrice = getTotal();
  console.log(products);
  console.log(totalPrice);

  const navigate = useNavigate();

  const onContinueClick = () => {
    navigate("/shop");
  };

  const onPayClick = () => {
    navigate("/home");
  };

  //conditional rendering
  return (
    <>
      {products.length > 0 && (
        <div>
          {products.map((product) => (
            <ProductDetails key={product.id} currentSelectedPlant={product} />
          ))}
          <div className="totalPrice">Total Price: {totalPrice}</div>
          <div className="navbuttons">
            <div onClick={onContinueClick} className="continue">
              Continue Shopping
            </div>
            <div onClick={onPayClick} className="pay">
              Pay
            </div>
          </div>
        </div>
      )}

      {products.length === 0 && (
        <div className="picAndHeading">
          <img className="empty_cart" src="/images/empty-cart.jpg" alt="" />
          <div className="heading">
            <div>Sorry! The Cart Is Empty!</div>
          </div>
        </div>
      )}
    </>
  );
};
