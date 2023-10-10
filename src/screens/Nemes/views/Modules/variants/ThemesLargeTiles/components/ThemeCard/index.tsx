import { FC, useEffect, useState } from "react";
import { View, ImageBackground, Image, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { ThemeLight } from "types/theme";
import { StockSymbolLight } from "types/symbol";
import ViewRow from "components/layout/ViewRow";
import PrimaryText from "components/PrimaryText";
import StocksBadge from "components/Theme/StocksBadge";
import StockGrid from "components/Stocks/StockGrid";
import PrimaryButton from "components/PrimaryButton";
import { COLORS } from "constants/colors";
import { aaplStockLight, msftStockLight, nvdaStockLight } from "../../../../../../_mockStore/stock";
import { getThemeStockLength } from "./utils";
import { styles } from "./styles";
import ViewCenter from "../../../../../../../../components/layout/ViewCenter";

type Props = {
  theme: ThemeLight;
  moduleName: string;
  moduleRank: number;
};

const ThemeCard: FC<Props> = ({ theme, moduleName, moduleRank }) => {
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
    <TouchableOpacity
      style={styles.cardTouchable}
      activeOpacity={0.7}
      onPress={handleViewAllClick}
    >
      <ImageBackground
        source={{ uri: theme.picture }}
        resizeMode="cover"
        imageStyle={styles.imageBgImage}
      >
        <LinearGradient
          colors={['rgba(0, 0, 0, 0.7)', 'rgba(0, 0, 0, 0)']}
          locations={[0, 1]}
          style={styles.linearGradient}
        />
        <ViewCenter>
          <ViewRow jc="flex-end" style={styles.favouriteButtonContainer}>
            <Image
              style={{ width: 20, height: 20 }}
              source={require("../../../../../../../../../assets/images/favicon.png")}
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
        </ViewCenter>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default ThemeCard;
