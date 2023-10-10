import { FC } from "react";
import ViewRow from "components/layout/ViewRow";
import ModulesThemeCard from "components/ModulesThemeCard";
import { ThemeTemplate } from "types/theme";
import { styles } from "./styles";
import { testTheme1, testTheme2, testTheme3 } from "../../_mockStore/themeLight";

type Props = {};

const NemesList: FC<Props> = () => {
  const analystChangesAmount = 2 as number;
  const themes = [
    testTheme1,
    testTheme2,
    testTheme3,
  ];

  return (
    <ViewRow style={styles.container} ai="flex-start">
      {themes.map((theme, idx) => {
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

export default NemesList;
