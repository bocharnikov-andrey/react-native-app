import { StyleSheet } from "react-native";
import { MixedStyleDeclaration } from "react-native-render-html";
import { COLORS } from "../../constants/colors";

export const styles = StyleSheet.create({
  themeName: {
    marginVertical: 4,
  },
  imageContainer: {
    justifyContent: "space-between",
    height: 204,
    padding: 4,

    // opacity: ${({ loading }) => (loading ? 0.5 : 1)};
    //   filter: ${({ loading }) => (loading ? "blur(12px)" : "blur(0px)")};
    //   transition: background-color 0.2s linear;
  },
  imageElement: {
    borderRadius: 12,
  },
  stocksBadge: {
    alignItems: "flex-start",
  },
});

export const richTextBaseStyle: MixedStyleDeclaration = {
  fontSize: 14,
  fontWeight: "400",
  color: COLORS.whiteOpacity_80,
};
