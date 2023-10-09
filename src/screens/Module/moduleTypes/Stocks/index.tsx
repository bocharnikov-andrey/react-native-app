import { FC } from "react";
import { FlatList, Text, View } from "react-native";
import { styles } from "./styles";
import { ModuleWithThemes } from "../../../../types/module";
import StockCard from "../../../../components/StockCard";
import { StockItem } from "../../../../types/stocks";
import { StockSymbolLight } from "../../../../types/symbol";

type Props = {
  module: ModuleWithThemes
};

// todo: temp solution until Stock row component is finished
const formatStock = (market: StockSymbolLight): StockItem => {
  return {
    id: market.id,
    title: market.name,
    key: market.label,
    description: market.description ?? "",
    picture: market.picture,
    price: market.price,
    profit: market.lastDayPriceDeltaPercent,
    lastDayPriceInfo: {
      price: 0,
      eodPrice: 0,
      priceDelta: 0,
      percentageChange: 0,
    },
    reopenMarketTime: "",
    percentOwnedByHedgeFonds: 0,
    category: "Category",
  };
};

const Stocks: FC<Props> = ({ module }) => {
  return (
    <View style={styles.container}>
      {module.markets && (
        <FlatList
          data={module.markets}
          renderItem={({ item }) => <StockCard stock={formatStock(item)} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.stockList}
          showsHorizontalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default Stocks;
