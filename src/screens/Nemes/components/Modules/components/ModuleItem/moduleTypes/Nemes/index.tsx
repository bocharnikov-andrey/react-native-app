import { FC } from "react";
import { ModuleLayoutTypes } from "types/module";
import { ThemeTemplate } from "types/theme";
import ModuleLayout from "../../components/ModuleLayout";
import { mockStore } from "../../../../../../_mockStore";
import ThemeCard from "../../components/ThemeCard";
import LargeTiles from "../../../../variants/LargeTiles";
import LargeFeatureCarousel from "../../../../variants/LargeFeatureCarousel";

type Props = {
  moduleRank: number;
};

const NemesLayout: FC<Props> = ({ moduleRank }) => {
  const { module } = mockStore;
  const nemesStore = {
    analystChangesAmount: 2,
  };

  if (module.layout === ModuleLayoutTypes.LARGE_FEATURE_CAROUSEL) {
    return <LargeFeatureCarousel moduleRank={moduleRank} />;
  }

  if (module.layout === ModuleLayoutTypes.LARGE_TILE) {
    return <LargeTiles moduleRank={moduleRank} />;
  }

  return (
    <ModuleLayout
      moduleLayout={module.layout}
      moduleName={module.name}
      moduleRank={moduleRank}
    >
      {module.themes.items.map((theme, index) => {
        const isEmptyAnalystRatingsChange =
          nemesStore.analystChangesAmount === 0 &&
          theme?.template === ThemeTemplate.ANALYST_RATINGS_CHANGES_TEMPLATE;

        if (isEmptyAnalystRatingsChange) {
          return null;
        }

        return (
          <ThemeCard
            key={theme?.id}
            theme={theme}
            rank={index + 1}
            moduleRank={moduleRank}
          />
        );
      })}
    </ModuleLayout>
  );
};

export default NemesLayout;
