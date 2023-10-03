import {
  ModuleContentTypes,
  ModuleFeaturedAverageDatapointTypes,
  ModuleLayoutTypes,
  ModuleSource,
  ModuleStatuses,
  ModuleTagsMode,
  ModuleTendencyDatapointTypes,
  ModuleTypes,
  ModuleWithThemes
} from "../../../types/module";
import { testTheme1, testTheme2, testTheme3 } from "./themeLight";

export const mediumTilesModule: ModuleWithThemes = {
  id: "123",
  type: ModuleTypes.nemeModule,
  status: ModuleStatuses.PUBLISHED,
  name: "Medium Tiles Module",
  source: ModuleSource.MANUAL,
  tagsMode: ModuleTagsMode.ALL,
  shouldRandomize: true,
  tags: [],
  layout: ModuleLayoutTypes.MEDIUM_TILES,
  content: ModuleContentTypes.nemesByTags,
  // stocks: [],
  // markets: [],
  tendencyDatapoints: ModuleTendencyDatapointTypes.POSITIVE_AND_NEGATIVE_AVERAGE_DATAPOINTS,
  featuredAverageDatapoint: ModuleFeaturedAverageDatapointTypes.AVG_PRICE_CHANGE_1_DAY,

  themes: {
    count: 4,
    items: [testTheme1, testTheme2, testTheme3],
  },
};
