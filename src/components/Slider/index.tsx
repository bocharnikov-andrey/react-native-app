import { useRef, useState, ReactNode, JSX } from "react";
import { View, StyleSheet, useWindowDimensions, StyleProp, ViewStyle } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { COLORS } from "../../constants/colors";

type Props<T> = {
  style?: StyleProp<ViewStyle>;
  data: T[];
  renderItem: (item: T, idx: number) => JSX.Element;
  onSlideChange?: (idx: number) => void;
  sliderWidth?: number;
  itemWidth?: number;
};

const Slider = <T,>({ style, data, renderItem, onSlideChange, sliderWidth, itemWidth }: Props<T>): ReactNode => {
  const carouselRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);
  const { width } = useWindowDimensions();

  const handleRenderItem = ({ item, index }) => renderItem(item, index);

  const handleSlideChange = (idx) => {
    setCurrentSlide(idx);
    onSlideChange?.(idx);
  };

  return (
    <View style={style}>
      <Carousel
        ref={carouselRef}
        data={data}
        renderItem={handleRenderItem}
        onSnapToItem={handleSlideChange}
        sliderWidth={sliderWidth ?? width}
        itemWidth={itemWidth ?? width}
      />
      <Pagination
        tappableDots
        carouselRef={carouselRef}
        dotsLength={data.length}
        activeDotIndex={currentSlide}
        containerStyle={styles.paginationContainer}
        dotContainerStyle={styles.paginationDotContainer}
        dotStyle={styles.paginationDot}
        inactiveDotOpacity={0.6}
        inactiveDotScale={1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  paginationContainer: {
    paddingVertical: 0,
    marginTop: 16,
  },
  paginationDotContainer: {
    marginHorizontal: 4,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.white,
  },
});

export default Slider;
