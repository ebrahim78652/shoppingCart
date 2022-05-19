//fullform: useIncDec

import React, { useState } from "react";
import { IncDecInfo } from "../Modals/IncDecInfo";

//numIncremeners is the number of counters we want in our UI.
//it is equal to number of products present in Shop.
//every product has one incrementer

export const useIncDec = (numIncrementers) => {
  const [arrIncDecInfo, setArrIncDecInfo] = useState(() => {
    //possible additional feature here: making the incrementer units coupled with id's that are not starting from 0.
    const arrIncrementers = [];
    for (let i = 0; i < numIncrementers; i++) {
      arrIncrementers.push(IncDecInfo(i));
    }

    return arrIncrementers;
  });

  const increment = (id) => {
    console.log(`increment called in useIncDec`);
    let updatedArrIncDecInfo = arrIncDecInfo.map((incrementer) => {
      if (incrementer.id === id) {
        incrementer.incrementAmount();
        console.log(incrementer.getAmount());
        return incrementer;
      }
      return incrementer;
    });

    setArrIncDecInfo(updatedArrIncDecInfo);
  };

  const decrement = (id) => {
    setArrIncDecInfo((prevQuantity) => {
      let updatedArr = prevQuantity.map((incrementer) => {
        if (incrementer.id === id) {
          if (!incrementer.getAmount() <= 0) {
            incrementer.decrementAmount();
            console.log(incrementer.getAmount());
            return incrementer;
          }
        }
        return incrementer;
      });

      console.log(updatedArr[0].getAmount());
      return updatedArr;
    });
  };

  return [increment, arrIncDecInfo, decrement];
};
