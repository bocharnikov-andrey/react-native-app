import { FC } from "react";
import { StyleSheet, View } from "react-native";
import SearchInput from "../../components/SearchInput";
import PageContainer from "../../components/layout/PageContainer";
import { COLORS } from "../../constants/colors";
import NemesProvider, { useNemesPage } from "./context";
import Filters from "./components/Filters";
import { useSearch } from "../../hooks/useSearch";

const NemesPageContainer: FC = () => {
  return (
    <NemesProvider>
      <Nemes />
    </NemesProvider>
  );
};

const Nemes: FC = () => {
  const { getFilteredNemes } = useNemesPage();
  const { searchValue, setSearchValue } = useSearch(getFilteredNemes);

  return (
    <PageContainer style={{ backgroundColor: COLORS.black }}>
      <View style={{ padding: 16 }}>
        <View>
          <SearchInput
            value={searchValue}
            onChangeValue={setSearchValue}
            placeholder="Search Stocks and Nemes"
          />
        </View>
        <View style={styles.filtersContainer}>
          <Filters />
        </View>
      </View>
    </PageContainer>
  );
};

export const styles = StyleSheet.create({
  filtersContainer: {
    marginTop: 16,
    marginBottom: 24,
  },
});

export default NemesPageContainer;
