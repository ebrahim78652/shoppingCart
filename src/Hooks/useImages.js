//purpose: serves as a mock database since we dont have one for this project.

import React, { useState, useEffect } from "react";
import { ImageInfo } from "../Modals/ImageInfo";

export const useImages = () => {
  const [allImagesInfo, setAllImagesInfo] = useState([
    ImageInfo(
      0,

      "All about you",

      30.0,

      "Lovely bouquet in pink shades with roses, carnation, lisianthus and gypsophila surrounded by greenery. Send this bouquet as a birthday present or to show your affection and you can be sure to make the receiver happy",

      "/images/image1.webp"
    ),
  ]);

  const incrementInStore = (idOfImageToUpdate) => {
    //find the object with the particular id;
    //and update the amount to buy
    const updatedAllImagesInfo = allImagesInfo.map((imageInfo) => {
      if (imageInfo.id === idOfImageToUpdate) {
        imageInfo.incrementAmountToBuy();
        console.log(imageInfo.getAmountToBuy());
        return imageInfo;
      }
      return imageInfo;
    });
    setAllImagesInfo(updatedAllImagesInfo);
  };

  //delete this effect later.
  useEffect(() => {
    console.log(allImagesInfo[0].getAmountToBuy());
  }, [allImagesInfo]);

  const decrementInStore = (idOfImageToUpdate) => {
    const updatedAllImagesInfo = allImagesInfo.map((imageInfo) => {
      if (imageInfo.id === idOfImageToUpdate) {
        if (!imageInfo.getAmountToBuy() <= 0) {
          imageInfo.decrementAmountToBuy();
          console.log(imageInfo.getAmountToBuy());
          return imageInfo;
        }
      }
      return imageInfo;
    });
    setAllImagesInfo(updatedAllImagesInfo);
  };

  return [allImagesInfo, incrementInStore, decrementInStore];
};
