//method to make array of objects. which will be given to checkout page.

export function getProducts(
  allImagesInfo = [],
  arrIncDecInfo = [],
  incrementInStore,
  decrementInStore,
  increment,
  decrement
) {
  console.log("get Products called.");
  const productsToBeDisplayed = allImagesInfo.filter(
    (product) => product.getAmountToBuy() > 0
  );

  console.log(productsToBeDisplayed);
  const infoArray = productsToBeDisplayed.map((product) => {
    const incrementer = arrIncDecInfo.find(
      (incrementer) => incrementer.id === product.id
    );
    return {
      name: product.name,
      price: product.price,
      description: product.description,
      imageUrl: product.imageUrl,
      increment: () => {
        increment(incrementer.id);
      },
      decrement: () => {
        decrement(incrementer.id);
      },
      incrementInStore: () => {
        incrementInStore(product.id);
      },
      decrementInStore: () => {
        decrementInStore(product.id);
      },
      quantity: incrementer,
    };
  });

  return infoArray;
}

export function getTotal(allImagesInfo = []) {
  let productsWithAmountNotZero = allImagesInfo.filter(
    (product) => product.getAmountToBuy() > 0
  );

  const totalPrice = productsWithAmountNotZero.reduce((prev, currentObj) => {
    return prev + currentObj.getAmountToBuy() * currentObj.price;
  }, 0);

  return totalPrice;
}
