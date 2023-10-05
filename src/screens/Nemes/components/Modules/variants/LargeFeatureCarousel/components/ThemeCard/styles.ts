import { StyleSheet } from "react-native";
import { COLORS } from "../../../../../../../../constants/colors";

export const styles = StyleSheet.create({
  cardTouchable: {
    borderRadius: 16,
  },
  container: {
    width: "100%",
    borderWidth: 2,
    borderColor: COLORS.whiteOpacity_20,
    borderRadius: 16,
  },
  imageBgContainer: {
    justifyContent: "space-between",
    height: "auto",
    minHeight: 600,
  },
  linearGradient: {
    height: "auto",
    minHeight: 600,
  },
  imageBgImage: {
    borderRadius: 16,
  },
  favouriteButtonContainer: {
    width: "100%",
  },
  contentContainer: {
    rowGap: 8,
    padding: 16,
    minHeight: 558,
    justifyContent: "flex-end",
  },
  header: {
    gap: 8,
    alignItems: "flex-start"
  },
  stockList: {
    gap: 12,
  },
  stockData: {
    gap: 12,
  },
});