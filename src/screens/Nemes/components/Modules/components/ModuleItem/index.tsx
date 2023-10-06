import { FC, useMemo } from "react";
import { View } from "react-native";
import PrimaryText from "components/PrimaryText";
import ModuleHeader from "./components/ModuleHeader";
import { ModuleLayoutTypes, ModuleTypes, ModuleWithThemes } from "types/module";
import NemesLayout from "./moduleTypes/Nemes";
import { styles } from "./styles";
import MarketsLayout from "./moduleTypes/Markets";
import ModuleProvider from "./context";

type Props = {
  module: ModuleWithThemes;
  rank: number;
};

const ModuleItem: FC<Props> = ({ module, rank }) => {
  const { name, themes, layout, id, type, markets = [], content } = module;

  const isGreyVariant =
    (type === ModuleTypes.nemeModule &&
      layout === ModuleLayoutTypes.LARGE_TILE) ||
    type === ModuleTypes.marketModule;

  const isVisibleSeeAllLink = useMemo(() => {
    const isLargeCarousel =
      layout === ModuleLayoutTypes.LARGE_FEATURE_CAROUSEL && themes.count > 5;
    const isLargeTile =
      layout === ModuleLayoutTypes.LARGE_TILE && themes.count > 5;
    const isSmallTiles =
      layout === ModuleLayoutTypes.SMALL_TILES &&
      (themes.count > 5 || markets?.length > 10);
    const isSmallTileStack =
      layout === ModuleLayoutTypes.SMALL_TILE_STACK && themes.count > 6;
    const isMediumTiles =
      layout === ModuleLayoutTypes.MEDIUM_TILES && themes.count > 5;
    return (
      isSmallTiles ||
      isSmallTileStack ||
      isMediumTiles ||
      isLargeCarousel ||
      isLargeTile
    );
  }, [themes.count, layout]);

  const componentStyles = styles({ isGreyVariant });

  const handleSeeAllPress = () => {
    console.log("See all pressed");
  };

  return (
    <ModuleProvider value={{ module }}>
      <View style={componentStyles.container}>
        <ModuleHeader
          title={name}
          rightSide={
            isVisibleSeeAllLink && (
              <PrimaryText
                style={componentStyles.seeAllLink}
                fontSize={16}
                fontWeight={500}
                onPress={handleSeeAllPress}
              >
                See all
              </PrimaryText>
            )
          }
        />
        {type === ModuleTypes.nemeModule && <NemesLayout moduleRank={rank} />}
        {type === ModuleTypes.marketModule && <MarketsLayout moduleRank={rank} />}
      </View>
    </ModuleProvider>
  );
};

export default ModuleItem;