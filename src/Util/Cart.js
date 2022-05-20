export const getTotalNumProducts = (allImagesInfo = []) => {
  const totalNumProducts = allImagesInfo.reduce((prev, currentObj) => {
    return prev + currentObj.getAmountToBuy();
  }, 0);

  return totalNumProducts;
};
