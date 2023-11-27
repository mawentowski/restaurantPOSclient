export function roundCost(cost) {
  return cost.toFixed(2);
}

export function calculateCostByCount(count, cost) {
  const totalCost = cost * count;
  return roundCost(totalCost);
}

export function calculateTotalCost(subTotal, taxedAmt) {
  return subTotal + taxedAmt;
}
