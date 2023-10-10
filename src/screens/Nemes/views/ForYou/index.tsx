import { FC } from "react";
import { Text, View } from "react-native";
import ModuleHeader from "components/Module/Header";
import EmptyState from "./components/EmptyState";
import ThemeCard from "./components/ThemeCard";
import { testTheme1, testTheme2, testTheme3 } from "../../_mockStore/themeLight";
import { styles } from "./styles";

type Props = {};

const ForYou: FC<Props> = () => {
  const hasPersonalisedNemes = true as boolean;
  const themes = [testTheme1, testTheme2, testTheme3];

  if (!hasPersonalisedNemes) {
    return <EmptyState/>;
  }

  return (
    <View style={styles.container}>
      <ModuleHeader title="Just for you"/>
      {themes.map((theme) => (
        <ThemeCard
          key={theme.id}
          theme={theme}
        />
      ))}
    </View>
  );
};

export default ForYou;
