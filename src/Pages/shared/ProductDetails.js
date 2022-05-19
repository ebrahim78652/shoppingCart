import React from "react";

export const ProductDetails = ({ currentSelectedPlant }) => {
  return (
    <>
      <div className="product_details_container">
        <div className="product">
          <img src="/images/image1.webp" alt="" />
          <div className="product_description">
            <p className="name">
              {currentSelectedPlant.name ? currentSelectedPlant.name : null}
            </p>
            <p className="price">{currentSelectedPlant.price}</p>
            <p className="description">{currentSelectedPlant.description}</p>
            <p className="amount">
              Amount
              <div className="buttons">
                <div
                  onClick={() => {
                    currentSelectedPlant.decrement();
                  }}
                  className="decrement"
                >
                  -
                </div>
                <div className="amount">
                  {currentSelectedPlant.quantity.getAmount()}
                </div>
                <div
                  onClick={() => {
                    currentSelectedPlant.increment();
                  }}
                  className="increment"
                >
                  +
                </div>
              </div>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
