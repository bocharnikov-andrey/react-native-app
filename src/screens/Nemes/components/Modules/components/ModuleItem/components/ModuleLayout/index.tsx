import { FC, ReactNode } from "react";
import { ScrollView, View } from "react-native";
import { ModuleLayoutTypes } from "types/module";
import { styles } from "./styles";

type Props = {
  children: ReactNode;
  moduleLayout: ModuleLayoutTypes;
  moduleName: string;
  moduleRank: number;
};

const ModuleLayout: FC<Props> = (props) => {
  const { children, moduleLayout, moduleName, moduleRank } = props;

  const hasHorizontalScroll = moduleLayout === ModuleLayoutTypes.MEDIUM_TILES ||
    moduleLayout === ModuleLayoutTypes.SMALL_TILES;
  if (hasHorizontalScroll) {
    return (
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        horizontal
      >
        { children }
      </ScrollView>
    );
  }

  return (
    <View style={moduleLayout === ModuleLayoutTypes.SMALL_TILE_STACK && styles.smallTilesStackContainer}>
      { children }
    </View>
  );
};

export default ModuleLayout;
