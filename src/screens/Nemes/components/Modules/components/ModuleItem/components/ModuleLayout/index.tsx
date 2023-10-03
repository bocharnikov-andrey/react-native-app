import { FC, ReactNode } from "react";
import { StyleSheet, View } from "react-native";
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

  return (
    <View style={moduleLayout === ModuleLayoutTypes.SMALL_TILE_STACK && styles.smallTilesStackContainer}>
      { children }
    </View>
  );
};

const styles = StyleSheet.create({
  smallTilesStackContainer: {
    // display: grid;
    // grid-template-columns: repeat(2, 1fr);
    // gap: 1rem;
    // padding: 0 1rem;
  },
});

export default ModuleLayout;
