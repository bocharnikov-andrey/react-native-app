import { FC, useCallback } from "react";
import { useWindowDimensions } from "react-native";
import take from "lodash.take";
import Slider from "components/Slider";
import { ThemeLight } from "types/theme";
import { CONTAINER_HORIZONTAL_PADDING } from "../../../../utils";
import ThemeCard from "./components/ThemeCard";
import { styles } from "./styles";
import { useModule } from "../../components/ModuleItem/context";

type Props = {
  moduleRank: number;
};

const ThemesLargeFeatureCarousel: FC<Props> = ({ moduleRank }) => {
  const { module } = useModule();
  const visibleThemes = take(module.themes.items, 5);
  const { width } = useWindowDimensions();

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

export default ThemesLargeFeatureCarousel;
