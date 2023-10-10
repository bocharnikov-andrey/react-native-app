import { TextStyle, Dimensions } from "react-native";
import { ModuleLayoutTypes } from "types/module";
import { CONTAINER_HORIZONTAL_PADDING } from "../../../../../../utils";

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
      // 32 - is parent container margins
      // 16 - is parent container gap
      width: Dimensions.get("window").width / 2 - CONTAINER_HORIZONTAL_PADDING * 3,
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
