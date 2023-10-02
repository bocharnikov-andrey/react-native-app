import { FC } from "react";
import { StyleSheet, View } from "react-native";
import SearchInput from "../../components/SearchInput";
import PageContainer from "../../components/layout/PageContainer";
import { COLORS } from "../../constants/colors";
import NemesProvider, { useNemesPage } from "./context";
import Filters from "../../components/Filters";
import { useSearch } from "../../hooks/useSearch";
import { FILTERS } from "../../components/Filters/helpers";
import PrimaryText from "../../components/PrimaryText";
import { padding } from "../../mixins";

const NemesPageContainer: FC = () => {
  return (
    <NemesProvider>
      <Nemes />
    </NemesProvider>
  );
};

const Nemes: FC = () => {
  const { filter, setFilter, getFilteredNemes } = useNemesPage();
  const { searchValue, setSearchValue } = useSearch(getFilteredNemes);

  return (
    <PageContainer style={styles.container} stickyHeaderIndices={[0, 1]}>
      <View style={styles.searchWrapper}>
        <SearchInput
          value={searchValue}
          onChangeValue={setSearchValue}
          placeholder="Search Stocks and Nemes"
        />
      </View>
      <View style={styles.filtersWrapper}>
        <Filters filter={filter} setFilter={setFilter} filtersList={FILTERS} />
      </View>
    </PageContainer>
  );
};

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.black,
  },
  searchWrapper: {
    marginTop: 16,
    marginBottom: 8,
    paddingHorizontal: 16,
  },
  filtersWrapper: {
    backgroundColor: COLORS.black,
    paddingHorizontal: 16,
  },
});

export default NemesPageContainer;
