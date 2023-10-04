import { COLORS } from "../../constants/colors";

export const getDeltaPriceColor = (priceDelta?: number) => {
  const isPositive = Number(priceDelta?.toFixed(2)) > 0;
  const isNegative = Number(priceDelta?.toFixed(2)) < 0;

  if (isPositive) {
    return COLORS.springGreenLight;
  }

  if (isNegative) {
    return COLORS.rose;
  }

  return COLORS.whiteOpacity_40;
};
