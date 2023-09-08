import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants/colors";

type Props = {
  size?: "small" | "medium" | "large";
  backgroundColor?: string;
  textColor?: string;
  isRounded?: boolean;
};

export const styles = (props: Props) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 16,
      backgroundColor: props.backgroundColor || COLORS.green,
      borderRadius: props.isRounded ? 16 : 0,
    },
    iconContainer: {
      marginRight: 4,
    },
    small: {
      height: 32,
    },
    medium: {
      height: 40,
    },
    large: {
      height: 48,
    },
  });
