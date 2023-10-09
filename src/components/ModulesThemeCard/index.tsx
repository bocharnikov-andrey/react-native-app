import { FC } from "react";
import { Image, ImageBackground, StyleProp, Text, TouchableHighlight, View, ViewStyle } from "react-native";
import isEmpty from "lodash.isempty";
import { richTextBaseStyle, styles } from "./styles";
import { ThemeLight, ThemeTemplate } from "../../types/theme";
import ViewRow from "../layout/ViewRow";
import StocksBadge from "../Theme/StocksBadge";
import { getStocksCount } from "../../utils/getStocksCount";
import PrimaryText from "../PrimaryText";
import RichText from "../RichText";

type Props = {
  data: ThemeLight;
  rank: number;
  filter?: string;
  style?: StyleProp<ViewStyle>;
};

const ModulesThemeCard: FC<Props> = ({ data, rank, filter, style }) => {
  const analystRatingsChangeTotalAmount = 2 as number;

  const imgUrl = data.pictures?.mediumSmall ??
    data.pictures?.medium ??
    data.picture;
  const isRenderChips = data.template !== ThemeTemplate.SPOTLIGHT_TEMPLATE;
  const isStocksBadgeHidden = !isRenderChips || isEmpty(data.stockSymbols);
  const stocksCount = getStocksCount(
    data.template,
    analystRatingsChangeTotalAmount,
    data.stockSymbols.length
  );

  const handleThemeClick = () => {
    console.log("Theme card clicked", data.id);
  };

  return (
    <View style={style}>
      <TouchableHighlight onPress={handleThemeClick}>
        <ImageBackground
          source={{ uri: imgUrl }}
          resizeMode="cover"
          style={styles.imageContainer}
          imageStyle={styles.imageElement}
        >
          <ViewRow jc="flex-end">
            <Image
              style={{ width: 20, height: 20 }}
              source={require("../../../assets/images/favicon.png")}
            />
          </ViewRow>
          <StocksBadge
            stocks={stocksCount}
            hide={isStocksBadgeHidden}
            style={styles.stocksBadge}
          />
        </ImageBackground>
      </TouchableHighlight>
      <PrimaryText
        fontSize={16}
        fontWeight={700}
        style={styles.themeName}
      >
        {data.name}
      </PrimaryText>
      <RichText content={data.shortDescription} baseStyle={richTextBaseStyle}/>
    </View>
  );
};

export default ModulesThemeCard;
