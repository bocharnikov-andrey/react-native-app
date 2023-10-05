import { StyleSheet } from "react-native";
import { COLORS } from "constants/colors";
import { CONTAINER_HORIZONTAL_PADDING } from "./utils";

type StylesProps = {
  isGreyVariant?: boolean;
};

export const styles = ({ isGreyVariant }: StylesProps) => StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: isGreyVariant ? COLORS.whiteOpacity_10 : "initial",
    rowGap: 16,
    paddingVertical: 24,
    paddingHorizontal: CONTAINER_HORIZONTAL_PADDING,
  },
  seeAllLink: {
    textDecorationLine: "underline",
  },
});