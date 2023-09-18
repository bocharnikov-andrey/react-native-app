import { StyleSheet } from "react-native";
import { COLORS } from "../../../../../constants/colors";
import { border, center } from "../../../../../mixins";

type StylesProps = {
  isActive: boolean;
  isFirstElement: boolean;
  isLastElement: boolean;
};

export const styles = ({
  isActive,
  isFirstElement,
  isLastElement,
}: StylesProps) =>
  StyleSheet.create({
    container: {
      ...center(),
      height: 28,
      paddingHorizontal: 16,
      ...border(1, COLORS.white),
      borderRadius: 16,
      backgroundColor: isActive ? COLORS.white : COLORS.black,
      marginLeft: isFirstElement ? 16 : 0,
      marginRight: isLastElement ? 16 : 0,
    },
  });
