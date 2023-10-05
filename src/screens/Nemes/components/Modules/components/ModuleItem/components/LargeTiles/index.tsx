import { FC, useCallback } from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import take from "lodash.take";
import { mockStore } from "../../../../../../_mockStore";
import ThemeCard from "./components/ThemeCard";
import Slider from "../../../../../../../../components/Slider";
import { CONTAINER_HORIZONTAL_PADDING } from "../../utils";
import { ThemeLight } from "../../../../../../../../types/theme";

type Props = {
  moduleRank: number;
};

const LargeTiles: FC<Props> = ({ moduleRank }) => {
  const { module } = mockStore;
  const visibleThemes = take(module.themes.items, 5);
  const { width } = useWindowDimensions();

  // const slideTrackEvent = () => {
  //     mParticleEventTracker("module_interaction", {
  //       module_name: module.name,
  //       module_display_name: module.name,
  //       module_rank: moduleRank,
  //       interaction: "horizontal_scroll",
  //     });
  //     mParticleSetModuleDataToUserAttributes(module.name, moduleRank);
  //   };

  const handleSlideChange = (idx) => {
    console.log("Slide change", idx);
  };

  const renderItem = useCallback((item: ThemeLight) => {
    return (
      <ThemeCard
        key={item.id}
        theme={item}
        moduleName={module.name}
        moduleRank={moduleRank}
      />
    );
  }, []);

  return (
    <Slider
      style={styles.slider}
      data={visibleThemes}
      renderItem={renderItem}
      onSlideChange={handleSlideChange}
      itemWidth={width - CONTAINER_HORIZONTAL_PADDING * 2}
    />
  );
};

const styles = StyleSheet.create({
  slider: {
    marginHorizontal: -CONTAINER_HORIZONTAL_PADDING,
  }
});

export default LargeTiles;
