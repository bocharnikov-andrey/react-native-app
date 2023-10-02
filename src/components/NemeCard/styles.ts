import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

export const styles = ({ isExtended }: { isExtended?: boolean }) =>
  StyleSheet.create({
    container: {
      position: "relative",
      width: 140,
    },
    starContainer: {
      position: "absolute",
      top: 4,
      right: 4,
      zIndex: 2,
    },
    starWrapper: {
      width: 32,
      height: 32,
      borderRadius: 24,
      backgroundColor: COLORS.blackOpacity_40,
    },
    imageContainer: {
      width: 140,
      height: isExtended ? 210 : 150,
    },
    image: {
      flex: 1,
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
      borderBottomLeftRadius: isExtended ? 8 : 0,
      borderBottomRightRadius: isExtended ? 8 : 0,
      objectFit: "contain",
      width: 140,
      height: 150,
    },
    stocksLengthText: {
      position: "absolute",
      bottom: 8,
      left: 8,
    },
    shortDescription: {
      marginTop: 4,
    },
  });
