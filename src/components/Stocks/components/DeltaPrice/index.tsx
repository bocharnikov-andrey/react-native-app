import { FC } from "react";
import PrimaryText, { Props as PrimaryTextProps } from "../../../PrimaryText";
import { getDeltaPriceColor } from "../../utils";
import { formatDeltaPrice } from "../../../../utils/formatDeltaPrice";

type Props = PrimaryTextProps & {
  deltaPrice: number;
};

const StockDeltaPrice: FC<Props> = ({ deltaPrice, ...textProps }) => {
  const formattedDeltaPrice = formatDeltaPrice(deltaPrice);

  return (
    <PrimaryText
      numberOfLines={1}
      textColor={getDeltaPriceColor(deltaPrice)}
      {...textProps}
    >
      {formattedDeltaPrice.text}
    </PrimaryText>
  );
};

export default StockDeltaPrice;
