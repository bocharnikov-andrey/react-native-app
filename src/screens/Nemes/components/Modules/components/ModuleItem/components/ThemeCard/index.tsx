import { FC, ReactNode } from "react";
import isEmpty from "lodash.isempty";
import { View, StyleSheet, Text, TextProps, TextStyle, Image, ViewStyle, ImageBackground } from "react-native";
import {
  ModuleFeaturedAverageDatapointTypes,
  ModuleLayoutTypes,
  ModuleTendencyDatapointTypes
} from "../../../../../../../../types/module";
import { mockStore } from "../../../../../../_mockStore";
import { ThemeLight, ThemeTemplate } from "../../../../../../../../types/theme";
import { COLORS } from "../../../../../../../../constants/colors";
import { getNameStylesByLayoutType } from "./utils";
import PrimaryText from "../../../../../../../../components/PrimaryText";
import DatapointData from "./components/DatapointData";
import ViewCenter from "../../../../../../../../components/layout/ViewCenter";
import { getStocksCount } from "../../../../../../../../utils/getStocksCount";
import StocksBadge from "../../../../../../../../components/Theme/StocksBadge";
import { StyleProp } from "react-native/Libraries/StyleSheet/StyleSheet";

type Props = {
  theme: ThemeLight | null;
  style?: StyleProp<ViewStyle>;
};

const ThemeCard: FC<Props> = ({ theme }: Props) => {
  const { module, analystChangesAmount } = mockStore;

  const { name, id, stockSymbols, template, averageDatapoints, pictures } = theme;

  const isRenderChips = template !== ThemeTemplate.SPOTLIGHT_TEMPLATE;
  const isDatapointShown =
    module.layout === ModuleLayoutTypes.MEDIUM_TILES &&
    module.featuredAverageDatapoint &&
    module.tendencyDatapoints &&
    averageDatapoints;

  const componentStyles = styles({
    layout: module.layout,
    isDatapointShown,
  });

  const handleCardClick = () => {
    // const userAttributesEventData = {
    //       last_theme_name: name,
    //       last_theme_rank: rank,
    //     };
    //
    //     Object.entries(userAttributesEventData).map(([key, val]) =>
    //       mParticleSetUserAttribute(key, val as string)
    //     );
    //     mParticleEventTracker("module_interaction", {
    //       module_name: module.name,
    //       module_display_name: module.name,
    //       module_rank: moduleRank,
    //       interaction: "theme_click",
    //     });
    //     mParticleSetModuleDataToUserAttributes(module.name, moduleRank);
    //     navigate(getThemeDetailsPath(id), {
    //       state: { referrer: window.location.pathname, rank },
    //     });
    console.log("Go to theme details click");
  };

  if (!theme) {
    return null;
  }

  return (
    <View
      style={componentStyles.container}
      onClick={handleCardClick}
    >
      {/* todo */}
      {/*<StyledThemeImage source={lazyImage.src}>*/}
      {/*  <FavoriteThemeButton*/}
      {/*    theme={theme}*/}
      {/*    style="dark-contained"*/}
      {/*    iconStyle="filled"*/}
      {/*  />*/}
      {/*</StyledThemeImage>*/}
      <ImageBackground
        source={{ uri: pictures.mediumSmall }}
        resizeMode="cover"
        style={componentStyles.themeImage}
        // imageStyle={{borderRadius: 10}}
      >
        <Image
          style={{ width: 20, height: 20 }}
          source={require("../../../../../../../../../assets/images/favicon.png")}
        />
      </ImageBackground>
      <View style={componentStyles.themeContent}>
        <PrimaryText
          style={componentStyles.themeName}
          fontWeight={700}
        >
          {name}
        </PrimaryText>
        {isDatapointShown && (
          <DatapointData
            averageDatapoints={averageDatapoints}
            featuredAverageDatapoint={
              module.featuredAverageDatapoint ??
              ModuleFeaturedAverageDatapointTypes.AVG_MARKET_CAP
            }
            tendencyDatapoints={
              module.tendencyDatapoints ??
              ModuleTendencyDatapointTypes.POSITIVE_AND_NEGATIVE_AVERAGE_DATAPOINTS
            }
          />
        )}
        <ViewCenter isRow style={componentStyles.opportunitiesContainer}>
          <StocksBadge
            stocks={getStocksCount(
              template,
              analystChangesAmount,
              stockSymbols.length
            )}
            hide={!isRenderChips || isEmpty(stockSymbols)}
          />
          <Image
            style={{ width: 15, height: 15 }}
            source={require("../../../../../../../../../assets/images/favicon.png")}
          />
          {/* <ArrowForwardIcon size={15} color={COLORS.whiteOpacity_80} /> */}
        </ViewCenter>
      </View>
    </View>
  );
};

type StylesProps = {
  layout: ModuleLayoutTypes;
  isDatapointShown?: boolean;
};

const styles = ({ layout, isDatapointShown }: StylesProps) => StyleSheet.create({
  container: {
    justifyContent: "space-between",
    backgroundColor: COLORS.black,
    borderRadius: 8,
    overflow: "hidden",
    width: getNameStylesByLayoutType(layout).width,
  },
  themeName: {
    minHeight: isDatapointShown ? "auto" : 36,
    fontSize: layout === ModuleLayoutTypes.MEDIUM_TILES ? 16 : 15,
    lineHeight: layout === ModuleLayoutTypes.MEDIUM_TILES ? 19.2 : 18,
    maxWidth: getNameStylesByLayoutType(layout).width,
  },
  themeImage: {
    flexDirection: "row",
    justifyContent: "flex-end",
    // padding: 4,
    height: 149,
    width: "100%",
    //   box-sizing: border-box;
    //   background: url(${(props) => props.source || "none"}) center center;
  },
  themeContent: {
    gap: 2,
    overflow: "hidden",
    position: "relative",
    zIndex: 0,
    padding: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: "rgba(120, 120, 120, 0.2)",
    // transition: background 0.2s ease-in-out;
    //   background: ${({ bgColor }) =>
    //     bgColor.r !== 0 && bgColor.g !== 0 && bgColor.b !== 0
    //       ? `linear-gradient(0deg, ${COLOR_BLACK_20}, ${COLOR_BLACK_20}), rgba(${bgColor.r}, ${bgColor.g}, ${bgColor.b}, 1)`
    //       : COLOR_WHITE_10};
  },
  opportunitiesContainer: {
    justifyContent: "space-between",
  },
});

export default ThemeCard;
