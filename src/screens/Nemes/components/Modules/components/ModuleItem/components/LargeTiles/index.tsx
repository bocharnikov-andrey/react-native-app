import { FC, useCallback, useRef, useState } from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import take from "lodash.take";
import { mockStore } from "../../../../../../_mockStore";
import { COLORS } from "../../../../../../../../constants/colors";
import { ThemeLight } from "../../../../../../../../types/theme";
import ThemeCard from "./components/ThemeCard";

type Props = {
  moduleRank: number;
};

const LargeTiles: FC<Props> = ({ moduleRank }) => {
  const { module } = mockStore;
  const carouselRef = useRef();

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

  const [activeSlideIdx, setActiveSlideIdx] = useState(0);

  const renderItem = useCallback(({item}) => {
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
        ref={carouselRef}
        data={visibleThemes}
        renderItem={renderItem}
        onSnapToItem={(idx) => setActiveSlideIdx(idx) }
        sliderWidth={width}
        itemWidth={width}
      />
      <Pagination
        tappableDots
        carouselRef={carouselRef}
        dotsLength={visibleThemes.length}
        activeDotIndex={activeSlideIdx}
        containerStyle={{
          paddingVertical: 0,
        }}
        dotContainerStyle={{
          marginHorizontal: 4,
          margin: 0,
          padding: 0,
        }}
        dotStyle={{
          width: 8,
          height: 8,
          borderRadius: 4,
          backgroundColor: COLORS.white,
          margin: 0,
          padding: 0,
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
  container: {
    margin: -16,
  },
});

export default LargeTiles;
