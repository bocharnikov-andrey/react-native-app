import { StyleSheet } from "react-native";
import { COLORS } from "constants/colors";
import { ModuleLayoutTypes } from "types/module";
import { getNameStylesByLayoutType } from "./utils";

type StylesProps = {
  layout: ModuleLayoutTypes;
  isDatapointShown?: boolean;
};

export const styles = ({ layout, isDatapointShown }: StylesProps) => StyleSheet.create({
  container: {
    justifyContent: "space-between",
    backgroundColor: COLORS.black,
    borderRadius: 8,
    overflow: "hidden",
    width: getNameStylesByLayoutType(layout).width,
  },
  themeName: {
    minHeight: isDatapointShown ? "auto" : 36,
    fontSize: layout === ModuleLayoutTypes.MEDIUM_TILES ? 16 : 15,
    lineHeight: layout === ModuleLayoutTypes.MEDIUM_TILES ? 19.2 : 18,
    maxWidth: getNameStylesByLayoutType(layout).width,
  },
  themeImage: {
    flexDirection: "row",
    justifyContent: "flex-end",
    // padding: 4,
    height: 149,
    width: "100%",
    //   box-sizing: border-box;
    //   background: url(${(props) => props.source || "none"}) center center;
  },
  themeContent: {
    gap: 2,
    overflow: "hidden",
    position: "relative",
    zIndex: 0,
    padding: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: "rgba(120, 120, 120, 0.2)",
    // transition: background 0.2s ease-in-out;
    //   background: ${({ bgColor }) =>
    //     bgColor.r !== 0 && bgColor.g !== 0 && bgColor.b !== 0
    //       ? `linear-gradient(0deg, ${COLOR_BLACK_20}, ${COLOR_BLACK_20}), rgba(${bgColor.r}, ${bgColor.g}, ${bgColor.b}, 1)`
    //       : COLOR_WHITE_10};
  },
  opportunitiesContainer: {
    justifyContent: "space-between",
  },
});
