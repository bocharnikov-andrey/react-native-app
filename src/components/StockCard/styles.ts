import { StyleSheet } from "react-native";
import { border, padding } from "../../mixins";
import { COLORS } from "../../constants/colors";

export const styles = ({ isExtended }: { isExtended?: boolean }) =>
  StyleSheet.create({
    container: {
      ...border(1, COLORS.blackOpacity_10),
      borderRadius: 8,
      position: "relative",
      paddingRight: isExtended ? 32 : 40,
    },
    content: {
      ...padding(8, 0, 8, 8),
      columnGap: 8,
    },
    contentWrapper: {
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: "0%",
    },
    description: {
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: "0%",
    },
    imageContainer: {
      width: 40,
      height: 40,
      marginRight: 12,
      alignSelf: "flex-start",
    },
    image: {
      width: 40,
      height: 40,
      objectFit: "contain",
    },
    priceBlock: {
      justifyContent: "flex-end",
    },
    action: {
      position: "absolute",
      top: 0,
      bottom: 0,
      right: 0,
      width: 24,
      borderLeftWidth: 1,
      borderLeftColor: COLORS.blackOpacity_20,

      svg: {
        width: 16,
        height: 16,
      },
    },
    arrowIconWrapper: {
      position: "absolute",
      top: 10,
      right: 8,
    },
  });
