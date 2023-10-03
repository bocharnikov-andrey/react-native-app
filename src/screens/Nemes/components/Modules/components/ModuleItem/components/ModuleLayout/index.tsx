import { FC, ReactNode } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { ModuleLayoutTypes } from "../../../../../../../../types/module";

type Props = {
  children: ReactNode;
  moduleLayout: ModuleLayoutTypes;
  moduleName: string;
  moduleRank: number;
};

const ModuleLayout: FC<Props> = (props) => {
  const { children, moduleLayout, moduleName, moduleRank } = props;

  // const moduleContainerRef = createRef<HTMLDivElement>();
  //
  //   const trackHorizontalScrollEventData = () => {
  //     mParticleEventTracker("module_interaction", {
  //       module_name: moduleName,
  //       module_display_name: moduleRank,
  //       module_rank: moduleRank,
  //       interaction: "horizontal_scroll",
  //     });
  //     mParticleSetModuleDataToUserAttributes(moduleName, moduleRank);
  //   };
  //
  //   useDetectHorizontalScroll(moduleContainerRef, () =>
  //     trackHorizontalScrollEventData()
  //   );

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

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexDirection: "row",
    gap: 16,
  },
  smallTilesStackContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
  },
});

export default ModuleLayout;
