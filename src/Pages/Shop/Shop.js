import React from "react";
import { Header } from "../shared/Header";
import { Card } from "./Card";
import { useNavigate } from "react-router-dom";

export const Shop = ({
  allImages,
  quantity,
  increment,
  decrement,
  incrementInStore,
  decrementInStore,
  flowerSelectedByUser,
}) => {
  return (
    <>
      <h1 className="offer">Unser Angebot</h1>
      <div className="cards_container">
        {/*      <Card quantity={quantity} increment={increment} />
        <Card />
        <Card /> */}

        {allImages.map((image, index) => {
          return (
            <Card
              key={image.id}
              name={image.name}
              price={image.price}
              description={image.description}
              quantity={quantity[index]}
              increment={() => {
                increment(image.id);
              }}
              decrement={() => {
                decrement(image.id);
              }}
              incrementInStore={() => {
                incrementInStore(image.id);
              }}
              decrementInStore={() => {
                decrementInStore(image.id);
              }}
              imageUrl={image.imageUrl}
              flowerSelectedByUser={flowerSelectedByUser}
            />
          );
        })}
      </div>
    </>
  );
};
