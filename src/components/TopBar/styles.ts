import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

export const styles = StyleSheet.create({
  topBar: {
    alignItems: "center",
    justifyContent: "center",
    height: 64,
    paddingHorizontal: 16,
    backgroundColor: COLORS.black,
  },
  wrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
