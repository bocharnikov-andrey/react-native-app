import { DocumentReference } from "@firebase/firestore";
import { TagType } from "./tags";
import { StockSymbolLight, ThemeStockSymbolLight } from "./symbol";
import { ThemeLight } from "./theme";

export type Module = {
  id: ModuleIdType;
  type: ModuleTypes;
  status: ModuleStatuses;
  name: string;
  source: ModuleSource;
  tagsMode: ModuleTagsMode;
  shouldRandomize: boolean;
  tags: DocumentReference<TagType>[];
  layout: ModuleLayoutTypes;
  content: ModuleContentTypes;
  stocks?: ThemeStockSymbolLight[];
  markets?: StockSymbolLight[];
  tendencyDatapoints?: ModuleTendencyDatapointTypes;
  featuredAverageDatapoint?: ModuleFeaturedAverageDatapointTypes;
};

export type ModuleWithThemes = Module & {
  themes: {
    count: number;
    items: ThemeLight[];
  };
};

export type ModuleIdType = string;

export enum ModuleTypes {
  nemeModule = "nemeModule",
  marketModule = "marketModule",
  notificationsModule = "notificationsModule",
}

export enum ModuleLayoutTypes {
  SMALL_TILES = "smallTiles",
  SMALL_TILE_STACK = "smallTileStack",
  MEDIUM_TILES = "mediumTiles",
  LARGE_TILE = "largeTile",
  LARGE_FEATURE_CAROUSEL = "largeFeatureCarousel",
}

export enum ModuleStatuses {
  PUBLISHED = "published",
  DRAFT = "draft",
}

export enum ModuleSource {
  MANUAL = "manual",
  AUTOMATED = "automated",
}

export enum ModuleTagsMode {
  ALL = "all",
  ANY = "any",
}

export enum ModuleContentTypes {
  nemesByTags = "nemesByTags",
  favourites = "favourites",
  marketsList = "marketsList",
  nemoNews = "nemoNews",
  automatedNotifications = "automatedNotifications",
}

export enum ModuleTendencyDatapointTypes {
  POSITIVE_AND_NEGATIVE_AVERAGE_DATAPOINTS = "positiveAndNegativeAverageDatapoints",
  POSITIVE_AVERAGE_DATAPOINT = "positiveAverageDatapoints",
  NEGATIVE_AVERAGE_DATAPOINT = "negativeAverageDatapoints",
}

export enum ModuleFeaturedAverageDatapointTypes {
  AVG_PRICE_CHANGE_1_DAY = "avgPriceChangePast1Day",
  AVG_PRICE_CHANGE_1_WEEK = "avgPriceChangePast1Week",
  AVG_PRICE_CHANGE_1_MONTH = "avgPriceChangePast1Month",
  AVG_MARKET_CAP = "avgMarketCap",
}

export enum ModuleFeaturedAverageDatapointTypes {
  AVG_PRICE_CHANGE_1_DAY = "avgPriceChangePast1Day",
  AVG_PRICE_CHANGE_1_WEEK = "avgPriceChangePast1Week",
  AVG_PRICE_CHANGE_1_MONTH = "avgPriceChangePast1Month",
  AVG_MARKET_CAP = "avgMarketCap",
}

export enum ModuleTendencyDatapointTypes {
  POSITIVE_AND_NEGATIVE_AVERAGE_DATAPOINTS = "positiveAndNegativeAverageDatapoints",
  POSITIVE_AVERAGE_DATAPOINT = "positiveAverageDatapoints",
  NEGATIVE_AVERAGE_DATAPOINT = "negativeAverageDatapoints",
}
