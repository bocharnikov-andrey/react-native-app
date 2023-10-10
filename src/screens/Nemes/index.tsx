import { FC } from "react";
import { StyleSheet, View } from "react-native";
import SearchInput from "../../components/SearchInput";
import PageContainer from "../../components/layout/PageContainer";
import { COLORS } from "../../constants/colors";
import NemesProvider, { useNemesPage } from "./context";
import Filters from "../../components/Filters";
import { useSearch } from "../../hooks/useSearch";
import { FILTERS } from "../../components/Filters/helpers";
import Modules from "./views/Modules";
import NemesList from "./views/NemesList";
import ExplainerCard from "./components/ExplainerCard";
import ForYou from "./views/ForYou";

const NemesPageContainer: FC = () => {
  return (
    <NemesProvider>
      <Nemes />
    </NemesProvider>
  );
};

// todo: move to common
export enum FilterEnums {
  ALL = "all",
  FAVORITES = "favorites",
  FOR_YOU = "for-you",
}

const viewsByFilter: Record<string, FC> = {
  [FilterEnums.ALL]: Modules,
  [FilterEnums.FAVORITES]: () => null,
  [FilterEnums.FOR_YOU]: ForYou,
};

const explainerNotes = "<p><span style=\"color: rgb(31, 31, 31);\">We use your past browsing behaviour and investment preferences to generate a list of themes that we think you'll be interested in. </span></p><p><span style=\"color: rgb(31, 31, 31);\">These themes can cover a wide range of topics, such as industry sectors, stock market trends, and personalized stock picks.</span></p>";
const explainerTitle = "Nemes just for you";

const Nemes: FC = () => {
  const { filter, setFilter, getFilteredNemes } = useNemesPage();
  const { searchValue, setSearchValue } = useSearch(getFilteredNemes);

  console.log(">>> filter", filter);

  const ViewComponent = viewsByFilter[FilterEnums.ALL] ?? NemesList;

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
      <ExplainerCard
        explainerNotes={explainerNotes}
        explainerTitle={explainerTitle}
      />
      <ViewComponent/>
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
