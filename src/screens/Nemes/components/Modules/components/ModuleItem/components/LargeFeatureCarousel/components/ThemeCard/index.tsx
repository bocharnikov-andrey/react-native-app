import { FC, useEffect, useState } from "react";
import { View, StyleSheet, TouchableHighlight, ImageBackground, Image } from "react-native";
import { ThemeLight } from "../../../../../../../../../../types/theme";
import ViewRow from "../../../../../../../../../../components/layout/ViewRow";
import PrimaryText from "../../../../../../../../../../components/PrimaryText";
import StocksBadge from "../../../../../../../../../../components/Theme/StocksBadge";
import { mockStore } from "../../../../../../../../_mockStore";
import { getStocksCount } from "../../../../../../../../../../utils/getStocksCount";
import { COLORS } from "../../../../../../../../../../constants/colors";
import RichText from "../../../../../../../../../../components/RichText";
import PrimaryButton from "../../../../../../../../../../components/PrimaryButton";
import { StockSymbolLight } from "../../../../../../../../../../types/symbol";
import {
  aaplStockLight,
  msftStockLight,
  nvdaStockLight,
  test4StockLight,
  test5StockLight
} from "../../../../../../../../_mockStore/stock";
import StockItem from "./components/StockItem";

type Props = {
  theme: ThemeLight;
  moduleName: string;
  moduleRank: number;
};

const ThemeCard: FC<Props> = ({ theme, moduleName, moduleRank }) => {
  // const fetchSymbols = async () => {
  //     try {
  //       const response = await getSymbolsByThemeTemplate(
  //         theme.template,
  //         theme.stockSymbols,
  //         limit
  //       );
  //       setSymbols(response);
  //     } catch (err) {
  //       console.error(err);
  //     } finally {
  //       setInitializing(false);
  //     }
  //   };
  //
  //   useEffect(() => {
  //     if (lazyImage.inView && isEmpty(symbols) && !isEmpty(theme.stockSymbols)) {
  //       fetchSymbols();
  //     }
  //   }, [lazyImage.inView, symbols, theme]);
  //
  //  const goToStockDetails = (stockId: string) => {
  //     mParticleEventTracker("module_interaction", {
  //       module_name: moduleName,
  //       module_display_name: moduleName,
  //       module_rank: moduleRank,
  //       interaction: "instrument_click",
  //     });
  //     mParticleSetModuleDataToUserAttributes(moduleName, moduleRank);
  //     navigate(getStockPath(stockId));
  //   };
  //
  //   const goToThemeDetails = () => {
  //     mParticleEventTracker("module_interaction", {
  //       module_name: moduleName,
  //       module_display_name: moduleName,
  //       module_rank: moduleRank,
  //       interaction: "theme_click",
  //     });
  //     mParticleSetModuleDataToUserAttributes(moduleName, moduleRank);
  //     navigate(getThemeDetailsPath(theme.id), {
  //       state: { referrer: window.location.pathname, rank: moduleRank },
  //     });
  //   };

  const { analystChangesAmount } = mockStore;
  const { name, stockSymbols, template, shortDescription } = theme;
  const [initializing, setInitializing] = useState(true);
  const [symbols, setSymbols] = useState<StockSymbolLight[]>([]);

  useEffect(() => {
    setSymbols([
      aaplStockLight,
      nvdaStockLight,
      msftStockLight,
      test4StockLight,
      test5StockLight,
    ]);
    setInitializing(false);
  }, []);

  const handleViewMoreClick = () => {
    console.log("View more clicked");
  };

  const handleStockClick = (symbol: StockSymbolLight) => {
    console.log("Stock clicked", symbol.id);
  };

  return (
    <TouchableHighlight onPress={handleViewMoreClick}>
      <ImageBackground
        source={{ uri: theme.picture }}
        resizeMode="cover"
        style={styles.imageBgContainer}
        imageStyle={styles.imageBgImage}
      >
        <View style={styles.container}>
          <ViewRow jc="flex-end" style={styles.favouriteButtonContainer}>
            <Image
              style={{ width: 20, height: 20 }}
              source={require("../../../../../../../../../../../assets/images/favicon.png")}
            />
          </ViewRow>
          <View style={styles.contentContainer}>
            <View style={styles.header}>
              <PrimaryText
                fontWeight={700}
                fontSize={24}
              >
                {name}
              </PrimaryText>
              <StocksBadge
                withBackground="black"
                stocks={getStocksCount(
                  template,
                  analystChangesAmount,
                  stockSymbols.length
                )}
              />
              <RichText content={shortDescription}/>
            </View>
            <View style={styles.footer}>
              <View style={styles.stockList}>
                {/*{initializing && skeleton}*/}
                {!initializing && symbols.map((symbol, idx) => (
                  <StockItem
                    key={symbol.id}
                    idx={idx}
                    symbol={symbol}
                    onPress={handleStockClick}
                  />
                ))}
              </View>
              {/*<GridGap gap=".75rem" gridAutoFlow="row" minWidth="100%">*/}
              {/*  {renderSymbols()}*/}
              {/*</GridGap>*/}
              <PrimaryButton
                title="View more"
                backgroundColor={COLORS.lightBlue}
                size="large"
                fontWeight={500}
                fontSize={16}
                pressHandler={handleViewMoreClick}
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
  imageBgContainer: {
    justifyContent: "space-between",
    height: "auto",
    minHeight: 600,
    marginBottom: 16,

    // height: "auto",
    // minHeight: 610,
    // marginTop: 16,
    // marginHorizontal: 16,
    // marginBottom: 8,

    //   box-shadow: inset 0 0 0 2px ${COLOR_WHITE_20};
    //   background: ${(props) =>
    //     `linear-gradient(179.97deg, rgba(0, 0, 0, 0) 0.03%, #000000 68.07%), url(${props.source}) no-repeat`};
  },
  imageBgImage: {
    borderRadius: 16,
  },
  favouriteButtonContainer: {
    width: "100%",
  },
  contentContainer: {
    rowGap: 8,
    padding: 16,
    minHeight: 558,
    justifyContent: "flex-end",
  },
  header: {
    gap: 8,
    alignItems: "flex-start"
  },
  stockList: {
    gap: 12,
  },
  footer: {
    gap: 12,
  },
});

export default ThemeCard;
