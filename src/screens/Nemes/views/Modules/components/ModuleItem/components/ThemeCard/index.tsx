import { FC } from "react";
import isEmpty from "lodash.isempty";
import {
  View,
  Image,
  ViewStyle,
  ImageBackground,
  StyleProp,
  TouchableOpacity
} from "react-native";
import {
  ModuleFeaturedAverageDatapointTypes,
  ModuleLayoutTypes,
  ModuleTendencyDatapointTypes
} from "types/module";
import { ThemeLight, ThemeTemplate } from "types/theme";
import PrimaryText from "components/PrimaryText";
import ViewCenter from "components/layout/ViewCenter";
import StocksBadge from "components/Theme/StocksBadge";
import { getStocksCount } from "utils/getStocksCount";
import { mockStore } from "../../../../../../_mockStore";
import DatapointData from "./DatapointData";
import { styles } from "./styles";
import { useModule } from "../../context";

type Props = {
  theme: ThemeLight | null;
  style?: StyleProp<ViewStyle>;
};

const ThemeCard: FC<Props> = ({ theme }: Props) => {
  const { analystChangesAmount } = mockStore;
  const { module } = useModule();

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
    console.log("Go to theme details click");
  };

  if (!theme) {
    return null;
  }

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={handleCardClick}>
      <View style={componentStyles.container}>
        <ImageBackground
          source={{ uri: pictures.mediumSmall }}
          resizeMode="cover"
          style={componentStyles.themeImage}
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
          </ViewCenter>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ThemeCard;
