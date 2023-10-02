import { FC } from "react";
import { FlatList, StyleSheet } from "react-native";
import { StockItem } from "../../../../types/stocks";
import StockCard from "../../../../components/StockCard";

type Props = {
  stocks: StockItem[];
};

const StocksList: FC<Props> = ({ stocks }) => {
  return (
    <FlatList
      data={stocks}
      renderItem={({ item }) => <StockCard stock={item} />}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.list}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    rowGap: 12,
    margin: 16,
  },
});

export default StocksList;
