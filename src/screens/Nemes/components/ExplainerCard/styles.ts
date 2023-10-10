import { StyleSheet } from "react-native";
import { COLORS } from "constants/colors";

type StylesProps = {
  cardColor?: string;
};

export const styles = ({ cardColor }: StylesProps) => StyleSheet.create({
  descriptionBubble: {
    backgroundColor: cardColor ?? COLORS.white,
    alignItems: "flex-start",
    rowGap: 8,
    marginHorizontal: 16,
    marginBottom: 8,
    borderRadius: 8,
    padding: 12,
    color: COLORS.black,
  },
  bubbleArrow: {
    backgroundColor: cardColor ?? COLORS.white,
    height: 14,
    width: 14,
    borderRadius: 2,
    transform: [{
      rotate: "45deg"
    }],
    marginTop: -16,
    marginBottom: 12,
    marginLeft: 40,
  },
  header: {
    width: "100%",
  },
});
