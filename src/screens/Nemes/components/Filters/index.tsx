import { FC, useRef } from "react";
import { FlatList, View } from "react-native";
import Item from "./Item";
import { FILTERS } from "./helpers";
import { useNemesPage } from "../../context";

const Filters: FC = () => {
  const flatListRef = useRef<any>(null);
  const { filter, setFilter } = useNemesPage();

  const selectFilter = (index: number, filterName?: string) => {
    flatListRef.current?.scrollToIndex({ animated: true, index, viewPosition: 0.5 });
    setFilter(filterName);
  };

  const renderItem = (item: string, index: number) => {
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
    <View style={{ marginHorizontal: -16 }}>
      <FlatList
        ref={flatListRef}
        data={FILTERS}
        renderItem={({ item, index }) => renderItem(item, index)}
        keyExtractor={(item) => item}
        contentContainerStyle={{ columnGap: 8 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Filters;
