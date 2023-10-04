import { FC, useEffect, useState } from "react";
import { View, StyleSheet, ImageBackground, Image, TouchableHighlight } from "react-native";
import { ThemeLight } from "../../../../../../../../../../types/theme";
import ViewRow from "../../../../../../../../../../components/layout/ViewRow";
import PrimaryText from "../../../../../../../../../../components/PrimaryText";
import StocksBadge from "../../../../../../../../../../components/Theme/StocksBadge";
import { getThemeStockLength } from "./utils";
import { COLORS } from "../../../../../../../../../../constants/colors";
import PrimaryButton from "../../../../../../../../../../components/PrimaryButton";
import { StockSymbolLight } from "../../../../../../../../../../types/symbol";
import { aaplStockLight, msftStockLight, nvdaStockLight } from "../../../../../../../../_mockStore/stock";
import StockGrid from "../../../../../../../../../../components/Stocks/StockGrid";

type Props = {
  theme: ThemeLight;
  moduleName: string;
  moduleRank: number;
};

const ThemeCard: FC<Props> = ({ theme, moduleName, moduleRank }) => {
  // const fetchSymbols = async () => {
  //   try {
  //     const response = await getSymbolsByThemeTemplate(
  //       theme.template,
  //       theme.stockSymbols,
  //       limit
  //     );
  //     setSymbols(response);
  //   } catch (err) {
  //     console.error(err);
  //   } finally {
  //     setInitializing(false);
  //   }
  // };
  //
  // useEffect(() => {
  //   if (lazyImage.inView && isEmpty(symbols) && !isEmpty(theme.stockSymbols)) {
  //     fetchSymbols();
  //   }
  // }, [lazyImage.inView, symbols, theme]);
  //
  // const renderSymbols = useCallback(() => {
  //   if (initializing) {
  //     return <StyledStocksSkeleton />;
  //   }
  //
  //   return symbols.map((symbol, index) => (
  //     <StyledStockGrid
  //       stock={symbol}
  //       key={index}
  //       moduleName={moduleName}
  //       moduleRank={moduleRank}
  //     />
  //   ));
  // }, [initializing, symbols]);
  //
  // const goToThemeDetails = () => {
  //   mParticleEventTracker("module_interaction", {
  //     module_name: moduleName,
  //     module_display_name: moduleName,
  //     module_rank: moduleRank,
  //     interaction: "theme_click",
  //   });
  //   mParticleSetModuleDataToUserAttributes(moduleName, moduleRank);
  //   navigate(getThemeDetailsPath(theme.id), {
  //     state: { referrer: window.location.pathname, rank: moduleRank },
  //   });
  // };

  const [initializing, setInitializing] = useState(true);
  const [symbols, setSymbols] = useState<StockSymbolLight[]>([]);
  const themeStockLength = getThemeStockLength(theme);

  useEffect(() => {
    setSymbols([aaplStockLight, nvdaStockLight, msftStockLight]);
    setInitializing(false);
  }, []);

  const handleViewAllClick = () => {
    console.log("View all clicked");
  };

  return (
    <TouchableHighlight onPress={handleViewAllClick}>
      <ImageBackground
        source={{ uri: theme.picture }}
        resizeMode="cover"
        style={styles.imageBgContainer}
        imageStyle={styles.imageBgImage}
      >
        <View style={styles.container}>
          <ViewRow style={styles.favouriteButtonContainer}>
            <Image
              style={{ width: 20, height: 20 }}
              source={require("../../../../../../../../../../../assets/images/favicon.png")}
            />
          </ViewRow>
          <View style={styles.headerContainer}>
            <PrimaryText
              fontWeight={700}
              fontSize={24}
              style={styles.themeNameText}
            >
              { theme.name }
            </PrimaryText>
            <StocksBadge stocks={themeStockLength} withBackground="white"/>
          </View>
          <View style={styles.contentContainer}>
            <ViewRow ai="center" style={styles.stocksContainer}>
              {/*{initializing && skeleton}*/}
              {!initializing && symbols.map((symbol) => (
                <StockGrid
                  stock={symbol}
                  key={symbol.id}
                  moduleName={moduleName}
                  moduleRank={moduleRank}
                />
              ))}
            </ViewRow>
            <View style={styles.viewAllContainer}>
              <PrimaryButton
                title="View all"
                backgroundColor={COLORS.lightBlue}
                size="large"
                fontWeight={500}
                fontSize={16}
                pressHandler={handleViewAllClick}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  contentContainer: {
    marginTop: 225,
  },
  imageBgContainer: {
    alignItems: "center",

    // //   background: ${(props) =>
    //     //     `linear-gradient(180deg, ${COLOR_BLACK_70} 0%, rgba(0, 0, 0, 0) 100%), url(${props.source}) no-repeat`};
  },
  imageBgImage: {
    borderRadius: 16,
    height: 314,
  },
  favouriteButtonContainer: {
    width: "100%",
    justifyContent: "flex-end",
  },
  headerContainer: {
    gap: 8,
  },
  themeNameText: {
    textAlign: "center",
  },
  viewAllContainer: {
    margin: 16,
  },
  stocksContainer: {
    marginTop: -90,
    marginHorizontal: 16,
    marginBottom: 0,
    gap: 8,
  },
});

export default ThemeCard;
