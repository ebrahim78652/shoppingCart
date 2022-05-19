export const ImageInfo = (id, name, price, description, imageUrl) => {
  let amountToBuy = 0;

  const incrementAmountToBuy = () => {
    amountToBuy++;
    console.log(`${name} : Amount being bought ${amountToBuy}`);
  };
  const decrementAmountToBuy = () => {
    amountToBuy--;
    console.log(`${name} : Amount being bought ${amountToBuy}`);
  };

  const getAmountToBuy = () => {
    return amountToBuy;
  };

  return {
    id,
    name,
    price,
    description,
    incrementAmountToBuy,
    decrementAmountToBuy,
    getAmountToBuy,
    imageUrl,
  };
};
