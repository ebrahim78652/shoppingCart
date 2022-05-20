import React from "react";

export const ProductDetails = ({ currentSelectedPlant }) => {
  return (
    <>
      <div className="product_details_container">
        <div className="product">
          <img src={currentSelectedPlant.imageUrl} alt="" />
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
                    currentSelectedPlant.decrementInStore();
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
                    currentSelectedPlant.incrementInStore();
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
      <div className="divider"></div>
    </>
  );
};
