import { StyleSheet } from "react-native";
import { CONTAINER_HORIZONTAL_PADDING } from "../../../../../../utils";

export const styles = StyleSheet.create({
  cardTouchable: {
    borderRadius: 16,
    marginLeft: CONTAINER_HORIZONTAL_PADDING,
  },
  contentContainer: {
    marginTop: 225,
  },
  favouriteButtonContainer: {
    width: "100%",
  },
  linearGradient: {
    borderRadius: 16,
    alignItems: "center",
    height: 314,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  imageBgImage: {
    borderRadius: 16,
    height: 314,
  },
  headerContainer: {
    gap: 8,
  },
  themeNameText: {
    textAlign: "center",
  },
  viewAllContainer: {
    margin: 16,
  },
  stocksContainer: {
    marginTop: -90,
    marginHorizontal: 16,
    marginBottom: 0,
    gap: 8,
  },
});
