export const formatPrice = (
  price?: number | string,
  includePositiveSymbol?: boolean
) => {
  if (!price) return "$0.00";

  let priceSymbol = "";
  const isNegativePrice = price < 0;

  if (isNegativePrice) {
    priceSymbol = "-";
  }

  if (!isNegativePrice && includePositiveSymbol) {
    priceSymbol = "+";
  }

  return `${priceSymbol}$${Math.abs(Number(price))
    .toFixed(2)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
};
