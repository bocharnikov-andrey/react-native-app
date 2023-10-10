import { StyleSheet } from "react-native";
import { MixedStyleDeclaration } from "react-native-render-html";
import { COLORS } from "constants/colors";

export const styles = StyleSheet.create({
  readMoreButton: {
    textDecorationLine: "underline",
  },
});

export const richTextBaseStyle: MixedStyleDeclaration = {
  fontSize: 16,
  fontWeight: "400",
  color: COLORS.black,
};
