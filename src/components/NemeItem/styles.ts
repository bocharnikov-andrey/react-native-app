import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: 137,
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
    width: 137,
    height: 149,
  },
  image: {
    flex: 1,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    objectFit: "contain",
    width: 137,
    height: 149,
  },
  infoContainer: {
    backgroundColor:
      "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), rgb(97, 99, 92)",
    padding: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  infoTitle: {
    minHeight: 65,
    marginBottom: 2,
  },
});
