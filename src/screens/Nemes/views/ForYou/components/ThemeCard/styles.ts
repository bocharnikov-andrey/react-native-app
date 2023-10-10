import { StyleSheet } from "react-native";
import { COLORS } from "../../../../../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    height: 208,
    borderRadius: 8,
  },
  imageBgContainer: {
    flexBasis: 140,
    position: "relative",
    height: "100%",
  },
  imageBgImage: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  favouriteButtonContainer: {
    position: "absolute",
    top: 4,
    right: 4,
  },
  content: {
    flexGrow: 1,
    backgroundColor: "rgba(120, 120, 120, 0.2)",
    height: "100%",
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    padding: 8,
    justifyContent: "space-between",
  },
  contentHeader: {
    gap: 12,
  },
  opportunitiesContainer: {
    backgroundColor: COLORS.white,
    paddingVertical: 4,
    paddingHorizontal: 7,
    gap: 9,
    borderRadius: 20,
    maxWidth: 172,
  },
  descriptionContainer: {
    gap: 4,
  },
  descriptionText: {
    flex: 1,
  },
  stocksContainer: {
    gap: 8,
  },
  stockImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.white,
  },
  notFirstStockImage: {
    marginLeft: -8,
  },
});
