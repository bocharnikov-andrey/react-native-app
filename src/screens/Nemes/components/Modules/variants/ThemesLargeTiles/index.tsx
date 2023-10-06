import { FC, useCallback } from "react";
import { useWindowDimensions } from "react-native";
import take from "lodash.take";
import Slider from "components/Slider";
import { ThemeLight } from "types/theme";
import { mockStore } from "../../../../_mockStore";
import { CONTAINER_HORIZONTAL_PADDING } from "../../../../utils";
import ThemeCard from "./components/ThemeCard";
import { styles } from "./styles";

type Props = {
  moduleRank: number;
};

const ThemesLargeTiles: FC<Props> = ({ moduleRank }) => {
  const { module } = mockStore;
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

export default ThemesLargeTiles;
