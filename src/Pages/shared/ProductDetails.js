import React from "react";

export const ProductDetails = () => {
  return (
    <>
      <div className="product_details_container">
        <div className="product">
          <img src="/images/image1.webp" alt="" />
          <div className="product_description">
            <p className="name">Pink flower</p>
            <p className="price">100$</p>
            <p className="amount">
              Amount
              <div className="buttons">
                <div className="decrement">-</div>
                <div className="amount">0</div>
                <div className="increment">+</div>
              </div>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
