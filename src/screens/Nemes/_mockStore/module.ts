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
import { aaplStockLight, msftStockLight, nvdaStockLight, test4StockLight, test5StockLight } from "./stock";

const commonModule: ModuleWithThemes = {
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

export const mediumTilesModule: ModuleWithThemes = {
  ...commonModule,
  id: "1",
  name: "Medium Tiles Module",
  layout: ModuleLayoutTypes.MEDIUM_TILES,
};

export const smallTilesStackModule: ModuleWithThemes = {
  ...commonModule,
  id: "2",
  name: "Small Tiles Stack Module",
  layout: ModuleLayoutTypes.SMALL_TILE_STACK,
};

export const smallTilesModule: ModuleWithThemes = {
  ...commonModule,
  id: "3",
  name: "Small Tiles Module",
  layout: ModuleLayoutTypes.SMALL_TILES,
};

export const largeTileModule: ModuleWithThemes = {
  ...commonModule,
  id: "4",
  name: "Large Tile Module",
  layout: ModuleLayoutTypes.LARGE_TILE,
};

export const largeFeatureCarouselModule: ModuleWithThemes = {
  ...commonModule,
  id: "5",
  name: "Large FC Module",
  layout: ModuleLayoutTypes.LARGE_FEATURE_CAROUSEL,
};

export const marketsModule: ModuleWithThemes = {
  ...commonModule,
  id: "6",
  name: "Small Tiles Markets Module",
  type: ModuleTypes.marketModule,
  layout: ModuleLayoutTypes.SMALL_TILES,
};
