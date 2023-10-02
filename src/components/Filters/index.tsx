import { Dispatch, FC, SetStateAction, useRef } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Item from "./Item";
import { FILTERS } from "./helpers";
import { FilterItemList, FilterItem } from "../../types/filters";

type Props = {
  filter: FilterItem;
  setFilter: Dispatch<SetStateAction<FilterItem>>;
  filtersList: FilterItemList;
};

const Filters: FC<Props> = ({ filter, setFilter, filtersList }) => {
  const flatListRef = useRef<any>(null);

  const selectFilter = (index: number, filterName: FilterItem) => {
    flatListRef.current?.scrollToIndex({ animated: true, index, viewPosition: 0.5 });
    setFilter(filterName);
  };

  const renderItem = (item: FilterItem, index: number) => {
    const isActive = filter === item;
    const isFirstElement = index === 0;
    const isLastElement = index === FILTERS.length - 1;

    return (
      <Item
        title={item}
        onPressHandler={() => selectFilter(index, item)}
        isActive={isActive}
        isFirstElement={isFirstElement}
        isLastElement={isLastElement}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={filtersList}
        renderItem={({ item, index }) => renderItem(item, index)}
        keyExtractor={(item) => item}
        contentContainerStyle={{ columnGap: 8 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    marginHorizontal: -16,
  },
});

export default Filters;
