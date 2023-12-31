import { FC } from "react";
import { FlatList, StyleSheet } from "react-native";
import NemeCard from "../NemeCard";
import { Neme } from "../../types/nemes";

type Props = {
  nemes: Neme[];
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
      renderItem={({ item }) => <NemeCard neme={item} />}
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
