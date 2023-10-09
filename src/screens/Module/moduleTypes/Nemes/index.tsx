import { FC } from "react";
import { View } from "react-native";
import { ThemeTemplate } from "types/theme";
import { ModuleWithThemes } from "types/module";
import ModulesThemeCard from "components/ModulesThemeCard";
import { styles } from "./styles";
import ViewRow from "../../../../components/layout/ViewRow";

type Props = {
  module: ModuleWithThemes;
};

const Nemes: FC<Props> = ({ module }) => {
  const analystChangesAmount = 2 as number;

  return (
    <ViewRow style={styles.container} ai="flex-start">
      {module.themes.items.map((theme, idx) => {
        const isEmptyAnalystRatingsChange =
          analystChangesAmount === 0 &&
          theme.template === ThemeTemplate.ANALYST_RATINGS_CHANGES_TEMPLATE;

        if (isEmptyAnalystRatingsChange) {
          return null;
        }

        return (
          <ModulesThemeCard
            key={theme.id}
            data={theme}
            rank={idx + 1}
            style={styles.themeItem}
          />
        );
      })}
    </ViewRow>
  );
};

export default Nemes;
