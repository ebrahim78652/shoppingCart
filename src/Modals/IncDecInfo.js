//object which the useIncDec Hook uses to keep track of amount.

export const IncDecInfo = (id, amount = 0) => {
  const incrementAmount = () => {
    amount = amount + 1;
    console.log(`increment called: amount=${amount}`);
  };

  const decrementAmount = () => {
    amount = amount - 1;
    console.log(`Decrement called: amount=${amount}`);
  };

  const getAmount = () => {
    return amount;
  };

  return {
    id,
    incrementAmount,
    decrementAmount,
    getAmount,
  };
};
