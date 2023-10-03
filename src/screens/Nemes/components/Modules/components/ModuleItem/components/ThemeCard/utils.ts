import { TextStyle } from "react-native";
import { ModuleLayoutTypes } from "../../../../../../../../types/module";

export const getNameStylesByLayoutType = (layout: ModuleLayoutTypes): TextStyle => {
  if (layout === ModuleLayoutTypes.SMALL_TILES) {
    return {
      height: 172,
      width: 140,
      minWidth: 140,
    };
  }
  if (layout === ModuleLayoutTypes.SMALL_TILE_STACK) {
    return {
      height: 204,
      width: "100%",
      minWidth: 140,
    };
  }
  if (layout === ModuleLayoutTypes.MEDIUM_TILES) {
    return {
      height: 224,
      width: 226,
      minWidth: 226,
    };
  }
  return {
    height: 172,
    width: 137,
  };
};