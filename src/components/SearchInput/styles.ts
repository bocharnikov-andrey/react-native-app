import { StyleSheet } from "react-native";
import { FONTS } from "../../constants/fonts";
import { COLORS } from "../../constants/colors";

export const styles = StyleSheet.create({
  searchWrapper: {
    flex: 1,
    height: 40,
    paddingHorizontal: 12,
    backgroundColor: COLORS.whiteOpacity_10,
    borderRadius: 4,
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    fontFamily: FONTS.regular,
    fontSize: 16,
    width: "100%",
    height: "100%",
    color: COLORS.white,
  },
});
