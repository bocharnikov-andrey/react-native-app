import { FC, useMemo } from "react";
import { View, StyleSheet } from "react-native";
import { COLORS } from "../../../../../../constants/colors";
import ModuleHeader from "./components/ModuleHeader";
import PrimaryText from "../../../../../../components/PrimaryText";
import { ModuleLayoutTypes, ModuleTypes, ModuleWithThemes } from "../../../../../../types/module";
import NemesLayout from "./moduleTypes/Nemes";

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
    </View>
  );
};

type StylesProps = {
  isGreyVariant?: boolean;
};

const styles = ({ isGreyVariant }: StylesProps) => StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: isGreyVariant ? COLORS.whiteOpacity_10 : "initial",
    rowGap: 16,
    paddingTop: 24,
    paddingBottom: 24,
  },
  seeAllLink: {
    textDecorationLine: "underline",
  },
});

export default ModuleItem;