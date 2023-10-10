import { StyleSheet } from "react-native";
import { CONTAINER_HORIZONTAL_PADDING } from "../../../../../../utils";

export const styles = StyleSheet.create({
  scrollViewContainer: {
    flexDirection: "row",
    gap: 16,
  },
  smallTilesStackContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
    marginHorizontal: CONTAINER_HORIZONTAL_PADDING,
  },
});
