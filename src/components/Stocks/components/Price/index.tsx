import { FC } from "react";
import PrimaryText, { Props as PrimaryTextProps } from "../../../PrimaryText";
import { formatPrice } from "../../../../utils/formatPrice";

type Props = PrimaryTextProps & {
  price: number;
};

const StockPrice: FC<Props> = ({ price, ...textProps }) => {
  return (
    <PrimaryText
      fontSize={16}
      fontWeight={500}
      {...textProps}
    >
      {formatPrice(price)}
    </PrimaryText>
  );
};

export default StockPrice;
