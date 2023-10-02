import { StockSymbol } from "./symbol";
import { ModuleFeaturedAverageDatapointTypes, ModuleTendencyDatapointTypes } from "./module";

export type Theme = {
  id: string;
  name: string;
  template: ThemeTemplate;
  category: string;
  subcategory?: ThemeSubcategory;
  picture: string;
  pictures?: Record<ThemePictureSizes, string> | null;
  description: string;
  content: string;
  shortDescription: string;
  innerDescription: string;
  profitDelta: number;
  newsDelta: number;
  stockSymbols: StockSymbol[];
  subscriptions: Subscription[];
  notificationsSettings?: NotificationsSettings;
  questions: FAQType[];
  datapoints: string[];
  youtube: YoutubeType;
  featuredDatapoint: string;
  tags: string[];
  averageDatapoints?: AverageDatapoints;
  visualizations?: Visualizations;
};

export type ThemeLight = Pick<
  Theme,
  | "id"
  | "name"
  | "template"
  | "category"
  | "subcategory"
  | "shortDescription"
  | "innerDescription"
  | "picture"
  | "pictures"
  | "stockSymbols"
  | "profitDelta"
  | "newsDelta"
  | "tags"
  | "averageDatapoints"
  | "datapoints"
  | "featuredDatapoint"
  | "visualizations"
> & {
  favoriteId?: string;
  // need only length of symbols
  stockSymbols: string[];
};

export enum ThemeTemplate {
  CUSTOM_TEMPLATE = "customTemplate",
  SPOTLIGHT_TEMPLATE = "spotlightTemplate",
  ANALYST_RATINGS_TEMPLATE = "analystRatingsTemplate",
  TOP_MOVERS_TEMPLATE = "topMoversTemplate",
  TOP_GAINERS_TEMPLATE = "topGainersTemplate",
  TOP_LOSERS_TEMPLATE = "topLosersTemplate",
  TRENDING_ON_REDDIT_TEMPLATE = "trendingOnRedditTemplate",
  TRENDING_ON_YOUTUBE_TEMPLATE = "trendingOnYoutubeTemplate",
  STOCKS_MENTIONS_ON_TWITTER_TEMPLATE = "stocksMentionsOnTwitterTemplate",
  ANALYST_RATINGS_CHANGES_TEMPLATE = "analystRatingsChangesTemplate",
  STRONG_BUYS_TEMPLATE = "strongBuysTemplate",
}

export enum CollectionsSubcategory {
  INDUSTRIES = "industries",
  TOPICS = "topics",
}

export enum TrendsSubcategory {
  SOCIAL = "social",
  NEWS_AND_MEDIA = "newsAndMedia",
}

export enum AnalysisSubcategory {
  FINANCIAL = "financial",
  FUNDAMENTAL = "fundamental",
  TECHNICAL = "technical",
}

export enum OpinionSubcategory {
  LEARNING = "learning",
  SUBJECTS = "subjects",
  SPOTLIGHT = "spotlight",
}

export type ThemeSubcategory =
  | CollectionsSubcategory
  | TrendsSubcategory
  | AnalysisSubcategory
  | OpinionSubcategory;

export type ThemePictureSizes = "small" | "mediumSmall" | "medium" | "large";

export type Subscription = {
  name: string;
  link: string;
};

export enum NotificationsSettingsKeys {
  HIGHLIGHTS = "highlights",
  BIG_EVENTS = "bigEvents",
  HOT_TOPICS = "hotTopics",
  DAILY_DIGEST = "dailyDigest",
  WEEKLY_DIGEST = "weeklyDigest",
}

export interface BigEventsNotificationType {
  title?: string;
  bigEventsNotificationDescription?: string;
  bigEventsFrequencyOfSending?: string;
  decreaseDeltaPercentage?: number;
  increaseDeltaPercentage?: number;
  minNumberOfUpvotes?: number;
  notificationMessage?: string;
}
export interface HotTopicsNotificationType {
  title?: string;
  notificationDescription?: string;
  frequencyOfSending?: string;
  delta?: number;
  deltaPercentage?: number;
  notificationMessage?: string;
}
export interface HighlightsNotificationType {
  highlightsNotificationDescription?: string;
  highlightsFrequencyOfSending?: string;
}
export interface DigestNotificationType {
  title?: string;
  notificationDescription?: string;
  frequencyOfSending?: string;
  minNumberOfUpvotes?: number;
  notificationMessage?: string;
  delta?: number;
}

export type NotificationsSettings = {
  [NotificationsSettingsKeys.BIG_EVENTS]?: BigEventsNotificationType;
  [NotificationsSettingsKeys.HOT_TOPICS]?: HotTopicsNotificationType;
  [NotificationsSettingsKeys.HIGHLIGHTS]?: HighlightsNotificationType;
  [NotificationsSettingsKeys.DAILY_DIGEST]?: DigestNotificationType;
  [NotificationsSettingsKeys.WEEKLY_DIGEST]?: DigestNotificationType;
};

export type FAQType = {
  id: string;
  question: string;
  answer: string;
};

export type YoutubeType = {
  title: string;
  videoLinks: string[];
};

export type AverageDatapointData = Record<
  ModuleTendencyDatapointTypes,
  {
    value: number;
    absoluteValue: number;
  }
>;

export type AverageDatapoints = Record<
  ModuleFeaturedAverageDatapointTypes,
  AverageDatapointData
>;

export type Visualizations = {
  targetPrice: boolean;
};
