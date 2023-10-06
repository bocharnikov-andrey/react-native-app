import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants/colors";

export const styles = StyleSheet.create({
  touchContainer: {
    borderRadius: 12,
  },
  container: {
    paddingTop: 4,
    paddingRight: 4,
    paddingBottom: 16,
    paddingLeft: 16,
    backgroundColor: COLORS.whiteOpacity_10,
    borderRadius: 12,
    minWidth: 125,
  },
  leftColumn: {
    gap: 4,
    marginTop: 12,
    maxWidth: 88,
  },
});
