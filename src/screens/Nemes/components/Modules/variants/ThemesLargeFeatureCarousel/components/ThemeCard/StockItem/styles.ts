import { StyleSheet } from "react-native";
import { COLORS } from "constants/colors";

export const styles = StyleSheet.create({
  stockTouch: {
    borderRadius: 4,
  },
  stockItem: {
    position: "relative",
    paddingVertical: 8,
    paddingRight: 8,
    paddingLeft: 36,
    borderRadius: 4,
    backgroundColor: COLORS.whiteOpacity_10,
    overflow: "hidden",
    borderColor: COLORS.whiteOpacity_20,
    borderWidth: 1,
  },
  stockItemIndex: {
    position: "absolute",
    backgroundColor: COLORS.lightBlue,
    top: -1,
    bottom: -1,
    left: 0,
    width: 28,
  },
});
