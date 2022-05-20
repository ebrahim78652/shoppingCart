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
    ImageInfo(
      1,

      "Guardian Angel",

      37.0,

      "Just looking at this pastel colored mix of roses, eustoma, santini and spray roses set your mind at ease. Send some wonderful vibes to a good friend or beloved relative.",

      "/images/image2.webp"
    ),
    ImageInfo(
      2,

      "Lovestoned",

      60,

      "Romantic bouquet with red roses. The timeless classic for those romantic occasions. The illustration is only intended as a sample. The florist will tie the bouquet based on the availability and seasonal price of the roses.",

      "/images/image3.webp"
    ),
    ImageInfo(
      3,

      "San Francisco",

      39.99,

      "This bouquet definitely takes it to a new level color-wise. A mood-booster unmatched when its delivered to the front door of a lucky receiver.",

      "/images/image4.webp"
    ),
    ImageInfo(
      4,

      "Peony Composition",

      30,

      "Stunning bouquet with 3 peonies, 5 freesias, astrantia and eucalyptus. Surprise a loved person with these favorite seasonal blooms! Your order will be carefully packed in a specially designed flower box. **The vase is not included. **",

      "/images/image5.webp"
    ),

    ImageInfo(
      5,

      "Awesome Peonies",

      39,

      "Peonies are one of our most popular flowers. Unfortunately, they are only available for a short period in the late spring and early summertime. So be sure to enjoy them while you can. **The vase is not included.**",

      "/images/image6.webp"
    ),
    ImageInfo(
      6,

      "Early Summer Bouquet",

      30.0,

      "This latest seasonal flower bouquet with 3 pink peonies, 6 purple freesias, gypsophila and pittosporum is very popular. Perfect for those who love peonies! Your order will be carefully packed in a specially designed flower box.",

      "/images/image7.webp"
    ),
    ImageInfo(
      7,

      "Splash of Color",

      40,

      "Just looking at this pastel colored mix of roses, eustoma, santini and spray roses set your mind at ease. Send some wonderful vibes to a good friend or beloved relative.",

      "/images/image8.webp"
    ),
    ImageInfo(
      8,

      "Lily’s Dream",

      10,

      "Elegant, round and white bouquet containing lilies, roses and antirrhinum. Our local florist delivers this beautiful gift directly to the doorstep of your choice..",

      "/images/image9.webp"
    ),
    ImageInfo(
      9,

      "Fairy Dance",

      10,

      "Bouquet in white tones with roses, callas and lilies. Handmade a delivered by a local florist.",

      "/images/image10.webp"
    ),
    ImageInfo(
      10,

      "Romantic Bouquet",

      10,

      "Bring someone´s heart to melt with this romantic bouquet. Classic, red roses are being accompanied by white freesia and rounded off by fresh eucalyptus and other greenery. Surprise a special someone with this beautiful bouquet who will find the perfect words for you!",

      "/images/image11.webp"
    ),
    ImageInfo(
      11,

      "Romantic Bouquet",

      10,

      "Bring someone´s heart to melt with this romantic bouquet. Classic, red roses are being accompanied by white freesia and rounded off by fresh eucalyptus and other greenery. Surprise a special someone with this beautiful bouquet who will find the perfect words for you!",

      "/images/image12.webp"
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
