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
    quantity,
  }) => {
    console.log(increment);
    console.log(decrement);
    console.log(quantity);
    setCurrentSelectedPlant({
      name: name,
      price: price,
      description: description,
      imageUrl: imageUrl,
      increment: increment,
      decrement: decrement,
      quantity: quantity,
    });
  };

  return [currentSelectedPlant, flowerSelectedByUser];
};
