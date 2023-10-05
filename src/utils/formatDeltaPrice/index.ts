import { COLOR_EXINITY_CORAL, COLOR_EXINITY_GREEN } from "view/theme/colors";
import { COLORS } from "../../constants/colors";

type FormatDeltaPriceReturn = {
  text: string;
  color: string;
  isPositive: boolean;
};

export const formatDeltaPrice = (
  deltaPrice: number
): FormatDeltaPriceReturn => {
  const isPositive = deltaPrice >= 0;
  const deltaPriceSign = isPositive ? "+" : "";
  const deltaPriceSignColor = isPositive
    ? COLORS.green
    : COLORS.coral;

  return {
    text: `${deltaPriceSign}${deltaPrice.toFixed(2)}%`,
    color: deltaPriceSignColor,
    isPositive,
  };
};
