import { FC, useCallback } from "react";
import { Text, View, StyleSheet, useWindowDimensions } from "react-native";
import Slider from "../../../../../../../../components/Slider";
import { mockStore } from "../../../../../../_mockStore";
import take from "lodash.take";
import { CONTAINER_HORIZONTAL_PADDING } from "../../index";
import { ThemeLight } from "../../../../../../../../types/theme";

type Props = {
  moduleRank: number;
};

const LargeFeatureCarousel: FC<Props> = ({ moduleRank }) => {
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
      data={visibleThemes}
      renderItem={renderItem}
      onSlideChange={handleSlideChange}
      sliderWidth={width - CONTAINER_HORIZONTAL_PADDING * 2}
      itemWidth={width - CONTAINER_HORIZONTAL_PADDING * 2}
    />
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default LargeFeatureCarousel;
