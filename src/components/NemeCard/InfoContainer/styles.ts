import { StyleSheet } from "react-native";

export const styles = ({ isExtended }: { isExtended?: boolean }) =>
  StyleSheet.create({
    infoContainer: {
      backgroundColor: isExtended
        ? "transparent"
        : "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), rgb(97, 99, 92)",
      padding: 8,
      borderBottomLeftRadius: 8,
      borderBottomRightRadius: 8,
    },
    infoTitle: {
      minHeight: 65,
      marginBottom: 2,
    },
  });
