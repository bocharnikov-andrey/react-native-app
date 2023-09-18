import { StyleSheet } from "react-native";
import { COLORS } from "../../../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    rowGap: 16,
    marginTop: 4,
    paddingVertical: 16,
    backgroundColor: COLORS.blue,
  },
  heading: {
    paddingHorizontal: 16,
  },
  content: {
    paddingHorizontal: 16,
  },
});
