import { Dispatch, FC, SetStateAction } from "react";
import { TextInput, View } from "react-native";
import { TextInputChangeEventData } from "react-native/Libraries/Components/TextInput/TextInput";
import { NativeSyntheticEvent } from "react-native/Libraries/Types/CoreEventTypes";
import { styles } from "./styles";
import { SearchIcon } from "../../constants/icons";
import ViewRow from "../layout/ViewRow";
import { COLORS } from "../../constants/colors";

type Props = {
  value: string;
  placeholder: string;
  onChangeValue: Dispatch<SetStateAction<string>>;
};

const SearchInput: FC<Props> = ({ value, placeholder, onChangeValue }) => {
  return (
    <ViewRow style={styles.searchWrapper}>
      <View style={styles.searchIcon}>
        <SearchIcon color={COLORS.whiteOpacity_60} />
      </View>
      <TextInput
        style={styles.searchInput}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={COLORS.whiteOpacity_40}
        onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) =>
          onChangeValue(e.nativeEvent.text)
        }
      />
    </ViewRow>
  );
};

export default SearchInput;
