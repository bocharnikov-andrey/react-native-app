import { StyleSheet } from "react-native";
import { CONTAINER_HORIZONTAL_PADDING } from "../../../../../../utils";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: CONTAINER_HORIZONTAL_PADDING,
  },
});
