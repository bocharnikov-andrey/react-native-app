import { FC, useMemo } from "react";
import { Image, ImageBackground, ImageStyle, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { ThemeLight } from "../../../../../../types/theme";
import ViewRow from "../../../../../../components/layout/ViewRow";
import PrimaryText from "../../../../../../components/PrimaryText";
import { getStocksCount } from "../../../../../../utils/getStocksCount";
import { COLORS } from "../../../../../../constants/colors";
import { normalizeDescription } from "./utils";

type Props = {
  theme: ThemeLight;
};

const SYMBOLS_TO_SHOW = 3;

const ThemeCard: FC<Props> = ({ theme }) => {
  const analystChangesAmount = 2 as number;

  const stocksCount = getStocksCount(
    theme.template,
    analystChangesAmount,
    theme.stockSymbols.length
  );

  const moreSymbolsCount = Math.max(stocksCount - SYMBOLS_TO_SHOW, 0);

  // const stockImages = take(stockSymbols, SYMBOLS_TO_SHOW).map((symbol) =>
  //   getStorageDownloadLink(`symbols/${symbol}_small`)
  // );
  const stockImages = theme.stockSymbols.map((symbol) => symbol.picture);

  const normalizedDescription = useMemo(
    () => normalizeDescription(theme.shortDescription),
    [theme.shortDescription]
  );

  const handleThemeClick = () => {
    console.log("Theme card clicked", theme.id);
  };

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={handleThemeClick}>
      <ViewRow style={styles.container}>
        <ImageBackground
          source={{ uri: theme.picture }}
          resizeMode="cover"
          style={styles.imageBgContainer}
          imageStyle={styles.imageBgImage}
        >
          <View style={styles.favouriteButtonContainer}>
            <Image
              style={{ width: 20, height: 20 }}
              source={require("../../../../../../../assets/images/favicon.png")}
            />
          </View>
        </ImageBackground>
        <View style={styles.content}>
          <View style={styles.contentHeader}>
            <View style={styles.descriptionContainer}>
              <PrimaryText
                fontWeight={700}
                textColor={COLORS.white}
                fontSize={16}
              >
                {theme.name}
              </PrimaryText>
              <ViewRow>
                <PrimaryText
                  fontWeight={400}
                  textColor={COLORS.white}
                  fontSize={14}
                  numberOfLines={3}
                  style={styles.descriptionText}
                >
                  {normalizedDescription}
                </PrimaryText>
              </ViewRow>
            </View>
            {theme.stockSymbols.length > 0 && (
              <ViewRow
                jc="flex-start"
                ai="center"
                style={styles.stocksContainer}
              >
                <ViewRow>
                  {stockImages.map((image, idx) => {
                    const stockStyles: ImageStyle[] = [styles.stockImage];
                    if (idx > 0) {
                      stockStyles.push(styles.notFirstStockImage);
                    }

                    return (
                      <Image
                        key={image}
                        style={stockStyles}
                        source={{ uri: image }}
                        resizeMode="cover"
                      />
                    );
                  })}
                </ViewRow>
                {moreSymbolsCount > 0 && (
                  <PrimaryText
                    fontSize={12}
                    fontWeight={500}
                    textColor={COLORS.white}
                  >
                    {`+${moreSymbolsCount}`}
                  </PrimaryText>
                )}
              </ViewRow>
            )}
          </View>
          <ViewRow
            ai="center"
            style={styles.opportunitiesContainer}
          >
            <PrimaryText
              textColor={COLORS.black}
              fontWeight={700}
              fontSize={12}
            >
              {`${stocksCount} opportunities`}
            </PrimaryText>
            <Image
              style={{ width: 15, height: 15 }}
              source={require("../../../../../../../assets/images/favicon.png")}
            />
          </ViewRow>
        </View>
      </ViewRow>
    </TouchableOpacity>
  );
};

export default ThemeCard;
