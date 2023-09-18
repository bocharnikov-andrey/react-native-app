import { FC } from "react";
import { FlatList, StyleSheet } from "react-native";
import { Nemes } from "../../types/opportunities";
import NemeItem from "../NemeItem";

type Props = {
  nemes: Nemes[];
  displayedNemesNumber?: number;
};

const NemesList: FC<Props> = ({ nemes, displayedNemesNumber }) => {
  const nemesList =
    displayedNemesNumber && nemes.length > displayedNemesNumber
      ? nemes.splice(0, displayedNemesNumber)
      : nemes;

  return (
    <FlatList
      data={nemesList}
      renderItem={({ item }) => (
        <NemeItem title={item.title} opportunitiesNumber={item.opportunitiesNumber} />
      )}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.list}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    columnGap: 12,
  },
});

export default NemesList;
