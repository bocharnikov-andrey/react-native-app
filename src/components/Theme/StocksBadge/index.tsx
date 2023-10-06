import { FC } from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import pluralize from "pluralize";
import ViewCenter from "../../layout/ViewCenter";
import { COLORS } from "../../../constants/colors";
import PrimaryText from "../../PrimaryText";

type Props = {
  stocks: number;
  hide?: boolean;
  withBackground?: "white" | "black";
  style?: StyleProp<ViewStyle>;
};

const StocksBadge: FC<Props> = ({ stocks, hide, withBackground, style }) => {
  const componentStyles = styles({ withBackground });

  if (hide) {
    return null;
  }

  return (
    <ViewCenter style={[
      componentStyles.container,
      withBackground && componentStyles.withBackgroundContainer,
      style,
    ]}>
      <PrimaryText
        italicText
        fontWeight={500}
        fontSize={12}
        textColor={withBackground ? COLORS.whiteOpacity_80 : COLORS.whiteOpacity_60}
      >
        {pluralize("opportunity", stocks, true)}
      </PrimaryText>
    </ViewCenter>
  );
};

type StylesProps = {
  withBackground?: "white" | "black";
};

const BACKGROUND_COLORS: Record<StylesProps["withBackground"], string> = {
  white: COLORS.whiteOpacity_10,
  black: COLORS.blackOpacity_60,
};

const styles = ({ withBackground }: StylesProps) => StyleSheet.create({
  withBackgroundContainer: {
    borderRadius: 40,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 10,
    paddingRight: 10,
  },
  container: {
    // width: "max-content"
    backgroundColor: BACKGROUND_COLORS[withBackground],
  },
});

export default StocksBadge;
