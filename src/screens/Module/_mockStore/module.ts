import {
  ModuleContentTypes, ModuleFeaturedAverageDatapointTypes,
  ModuleLayoutTypes,
  ModuleSource,
  ModuleStatuses,
  ModuleTagsMode, ModuleTendencyDatapointTypes,
  ModuleTypes,
  ModuleWithThemes
} from "../../../types/module";
import {
  aaplStockLight,
  msftStockLight,
  nvdaStockLight,
  test4StockLight,
  test5StockLight
} from "../../Nemes/_mockStore/stock";
import { testTheme1, testTheme2, testTheme3 } from "../../Nemes/_mockStore/themeLight";

const commonTestModule: ModuleWithThemes = {
  id: "1",
  type: ModuleTypes.nemeModule,
  status: ModuleStatuses.PUBLISHED,
  name: "Top Stocks",
  source: ModuleSource.MANUAL,
  tagsMode: ModuleTagsMode.ALL,
  shouldRandomize: true,
  tags: [],
  layout: ModuleLayoutTypes.MEDIUM_TILES,
  content: ModuleContentTypes.nemesByTags,
  // stocks: [],
  markets: [
    aaplStockLight,
    nvdaStockLight,
    msftStockLight,
    test4StockLight,
    test5StockLight,
  ],
  tendencyDatapoints: ModuleTendencyDatapointTypes.POSITIVE_AND_NEGATIVE_AVERAGE_DATAPOINTS,
  featuredAverageDatapoint: ModuleFeaturedAverageDatapointTypes.AVG_PRICE_CHANGE_1_DAY,

  themes: {
    count: 3,
    items: [testTheme1, testTheme2, testTheme3],
  },
};

export const nemeModule: ModuleWithThemes = {
  ...commonTestModule,
  id: "1",
  type: ModuleTypes.nemeModule,
  name: "Module with themes"
};

export const marketModule: ModuleWithThemes = {
  ...commonTestModule,
  id: "2",
  type: ModuleTypes.marketModule,
  name: "Module with stocks"
};
