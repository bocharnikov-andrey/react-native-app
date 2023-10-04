import { FC } from "react";
import PrimaryText, { Props as PrimaryTextProps } from "../../../PrimaryText";

type Props = PrimaryTextProps & {
  label: string;
};

const StockLabel: FC<Props> = ({ label, ...textProps }) => {
  return (
    <PrimaryText
      numberOfLines={1}
      fontSize={16}
      fontWeight={500}
      {...textProps}
    >
      {label}
    </PrimaryText>
  );
};

export default StockLabel;
