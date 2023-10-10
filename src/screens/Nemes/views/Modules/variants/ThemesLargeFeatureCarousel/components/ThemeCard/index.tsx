import { FC, useEffect, useState } from "react";
import { View, ImageBackground, Image, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { ThemeLight } from "types/theme";
import { StockSymbolLight } from "types/symbol";
import ViewRow from "components/layout/ViewRow";
import RichText from "components/RichText";
import PrimaryButton from "components/PrimaryButton";
import PrimaryText from "components/PrimaryText";
import StocksBadge from "components/Theme/StocksBadge";
import { COLORS } from "constants/colors";
import { getStocksCount } from "utils/getStocksCount";
import { mockStore } from "../../../../../../_mockStore";
import {
  aaplStockLight,
  msftStockLight,
  nvdaStockLight,
  test4StockLight,
  test5StockLight
} from "../../../../../../_mockStore/stock";
import StockItem from "./StockItem";
import { styles } from "./styles";

type Props = {
  theme: ThemeLight;
  moduleName: string;
  moduleRank: number;
};

const ThemeCard: FC<Props> = ({ theme, moduleName, moduleRank }) => {
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
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.cardTouchable}
      onPress={handleViewMoreClick}
    >
      <ImageBackground
        source={{ uri: theme.picture }}
        resizeMode="cover"
        style={styles.imageBgContainer}
        imageStyle={styles.imageBgImage}
      >
        <LinearGradient
          colors={['rgba(0, 0, 0, 0)', 'rgb(0, 0, 0)']}
          locations={[0.03, 0.68]}
          style={styles.linearGradient}
        >
          <View style={styles.container}>
            <ViewRow jc="flex-end" style={styles.favouriteButtonContainer}>
              <Image
                style={{ width: 20, height: 20 }}
                source={require("../../../../../../../../../assets/images/favicon.png")}
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
              <View style={styles.stockData}>
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
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default ThemeCard;
