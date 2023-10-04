import { FC, useCallback, useState } from "react";
import { View, StyleSheet } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import take from "lodash.take";
import { mockStore } from "../../../../../../_mockStore";
import { COLORS } from "../../../../../../../../constants/colors";
import { ThemeLight } from "../../../../../../../../types/theme";

type Props = {
  moduleRank: number;
};

const LargeTiles: FC<Props> = ({ moduleRank }) => {
  const { module } = mockStore;

  const visibleThemes = take(module.themes.items, 5);

  // const slideTrackEvent = () => {
  //     mParticleEventTracker("module_interaction", {
  //       module_name: module.name,
  //       module_display_name: module.name,
  //       module_rank: moduleRank,
  //       interaction: "horizontal_scroll",
  //     });
  //     mParticleSetModuleDataToUserAttributes(module.name, moduleRank);
  //   };

  const [activeSlideIdx, setActiveSlideIdx] = useState(0);

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
    <View style={styles.container}>
      <Carousel
        data={this.state.entries}
        renderItem={this._renderItem}
        onSnapToItem={(idx) => setActiveSlideIdx(idx) }
      />
      <Pagination
        dotsLength={visibleThemes.length}
        activeDotIndex={activeSlideIdx}
        containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
        dotStyle={{
          width: 8,
          height: 8,
          borderRadius: 4,
          marginHorizontal: 8,
          backgroundColor: COLORS.white,
        }}
        inactiveDotStyle={{
          // Define styles for inactive dots here
        }}
        inactiveDotOpacity={0.6}
        inactiveDotScale={1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default LargeTiles;
