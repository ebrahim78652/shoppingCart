import React from "react";
import { useNavigate } from "react-router-dom";

export const Card = ({
  quantity,
  increment,
  decrement,
  name,
  price,
  description,
  incrementInStore,
  decrementInStore,
  imageUrl,
  flowerSelectedByUser,
}) => {
  const navigate = useNavigate();

  //navigating from here to the details page.
  const onPictureClick = () => {
    console.log("picture clicked");
    flowerSelectedByUser({
      name: name,
      price: price,
      description: description,
      imageUrl: imageUrl,
      increment: increment,
      decrement: decrement,
      incrementInStore: incrementInStore,
      decrementInStore: decrementInStore,
      quantity: quantity,
    });
    navigate("/details");
  };

  const onIncrementClick = () => {
    console.log("increment clicked");
    increment();
    incrementInStore();
  };

  const onDecrementClick = () => {
    console.log("increment clicked");
    decrement();
    decrementInStore();
  };

  return (
    <>
      <div className="card">
        <img onClick={onPictureClick} src={imageUrl} alt="flower pic1" />
        <div className="description">
          <p className="name">{name}</p>
          <p className="price">{price}$</p>
        </div>
        <div className="buttons">
          <div onClick={onDecrementClick} className="decrement">
            -
          </div>
          <div className="amount">{quantity.getAmount()}</div>
          <div onClick={onIncrementClick} className="increment">
            +
          </div>
        </div>
      </div>
    </>
  );
};
