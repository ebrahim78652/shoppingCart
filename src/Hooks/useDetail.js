//fullform: useIncDec

import React, { useState } from "react";

export const useDetails = () => {
  const [currentSelectedPlant, setCurrentSelectedPlant] = useState({
    name: "default",
    price: 0,
    description: "default",
  });

  const flowerSelectedByUser = ({
    name,
    price,
    description,
    imageUrl,
    increment,
    decrement,
    incrementInStore,
    decrementInStore,
    quantity,
  }) => {
    setCurrentSelectedPlant({
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
  };

  return [currentSelectedPlant, flowerSelectedByUser];
};
