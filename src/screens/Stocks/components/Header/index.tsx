import { FC, useState } from "react";
import { StyleSheet, View } from "react-native";
import { COLORS } from "../../../../constants/colors";
import Filters from "../../../../components/Filters";
import SearchInput from "../../../../components/SearchInput";
import { FilterItem } from "../../../../types/filters";

const Header: FC = () => {
  const [filter, setFilter] = useState<FilterItem>("Category");
  const [searchValue, setSearchValue] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.filtersContainer}>
        <Filters filter={filter} setFilter={setFilter} filtersList={["All"]} />
      </View>
      <SearchInput
        value={searchValue}
        onChangeValue={setSearchValue}
        placeholder="Search Stocks and Nemes"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.black,
    padding: 16,
  },
  filtersContainer: {
    marginBottom: 16,
  },
});

export default Header;
