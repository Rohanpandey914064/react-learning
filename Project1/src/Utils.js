export const sum = (transactions, type) => {
  return transactions
    .filter(t => t.type === type)
    .reduce((acc, curr) => acc + parseFloat(curr.amount), 0);
};