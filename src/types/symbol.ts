import { Timestamp } from "@firebase/firestore";

export type StockSymbol = {
  id: string;
  status: SymbolStatus;
  name: string;
  label: string;
  category: string;
  exchange?: string;
  description?: string;
  shortDescription?: string | null;
  picture: string;
  smallPicture?: string | null;
  economicSector?: string;
  industryGroup?: string;
  analystSentiment: AnalystSentimentType;
  updatedAt: Date;
  price: number;
  lastDayPriceDeltaPercent: number;
  lastWeekPriceDeltaPercent: number;
  lastMonthPriceDeltaPercent: number;
  lastMonthPriceData: Pick<Price, "price" | "timestamp">[];
  redditAnalysis?: RedditAnalysis;
  youtubeAnalysis?: YoutubeAnalysis;
  twitterAnalysis?: TwitterAnalysis;
  lastAnalystSentimentChange?: AnalystSentimentChange;
  tradingVolumeDailyChange?: number;
  datapoints: Record<string, number | Timestamp>;
  vitals?: StockVitals;
  randomOrder?: number;
};

export type StockSymbolLight = Pick<
  StockSymbol,
  | "id"
  | "label"
  | "name"
  | "updatedAt"
  | "category"
  | "description"
  | "economicSector"
  | "industryGroup"
  | "analystSentiment"
  | "picture"
  | "price"
  | "lastDayPriceDeltaPercent"
  | "lastWeekPriceDeltaPercent"
  | "lastMonthPriceDeltaPercent"
  | "lastAnalystSentimentChange"
  | "datapoints"
  | "tradingVolumeDailyChange"
  | "randomOrder"
>;

export type ThemeStockSymbolLight = {
  id: string;
  label: string;
};

export enum SymbolStatus {
  Active = "active",
  Inactive = "inactive",
}

export type AnalystSentimentType = 0 | 1 | 2 | 3 | 4 | 5 | undefined;

export type Price = {
  price: number;
  timestamp: Date;
  eodPrice: number;
  delta: number;
};

export type RedditMention = {
  added: string; // actually date
  author: string;
  avatarUrl: string;
  domain: string;
  guid: string; // actually number
  monthlyVisitors: number;
  originalUrl: string;
  pageType: string;
  pubType: string;
  publisherSubType: string;
  queryId: number;
  queryName: string;
  redditScore: number;
  snippet: string;
  threadEntryType: string;
  threadId: string; // actually number
  updated: string;
  url: string;
  title: string;
  pageTypeName: string;
  resourceId: string;
};

export enum BrandwatchTimeEnum {
  HOURS_24 = "24hours",
  DAYS_7 = "7days",
}

export type RedditAnalysis = {
  [BrandwatchTimeEnum.HOURS_24]: {
    commentsUpvotes: number;
    comments: RedditMention[];
    postsUpvotes: number;
    posts: RedditMention[];
  };
  [BrandwatchTimeEnum.DAYS_7]: {
    commentsUpvotes: number;
    comments: RedditMention[];
    postsUpvotes: number;
    posts: RedditMention[];
  };
};

export type YoutubeMention = {
  added: string; // actually date
  author: string;
  avatarUrl: string;
  domain: string;
  guid: string; // actually number
  monthlyVisitors: number;
  originalUrl: string;
  pageType: string;
  pubType: string;
  publisherSubType: string;
  queryId: number;
  queryName: string;
  redditScore: number;
  snippet: string;
  threadEntryType: string;
  threadId: string; // actually number
  updated: string;
  url: string;
  title: string;
  pageTypeName: string;
  resourceId: string;
};

export type YoutubeAnalysisItem = {
  comments: YoutubeMention[];
  commentsTotal: number;
  posts: YoutubeMention[];
  postsTotal: number;
};

export type YoutubeAnalysis = {
  [BrandwatchTimeEnum.HOURS_24]: YoutubeAnalysisItem;
  [BrandwatchTimeEnum.DAYS_7]: YoutubeAnalysisItem;
};

export type TwitterAnalysisItem = {
  mentionsCount: number;
  mentionsCountChange: number;
  mentionsBySentiment?: {
    negative: number;
    neutral: number;
    positive: number;
  };
};

export type TwitterAnalysis = {
  [BrandwatchTimeEnum.HOURS_24]: TwitterAnalysisItem;
  brandwatchCategoryId: string;
  updatedAt: Date;
};

export type AnalystSentimentChange = {
  nextSentiment: number;
  previousSentiment: number;
  date: Date;
};

export enum VitalDividendOverall {
  EXCELLENT = "Excellent",
  ABOVE_AVERAGE = "Above Average",
  AVERAGE = "Average",
  BELOW_AVERAGE = "Below Average",
  POOR = "Poor",
  NONE = "None",
}

export type KeyDataType = {
  name: string;
  value: string;
}[];

export type StockVitalDividend = {
  overall: VitalDividendOverall;
  summary: string;
  keyMetrics: KeyDataType;
  description: string;
};

export enum AnalyticsLabelEnum {
  ALL = "All",
  STRONG_BUY = "Strong buy",
  BUY = "Buy",
  HOLD = "Hold",
  SELL = "Sell",
  STRONG_SELL = "Strong sell",
}

export type StockVitalAnalystRating = {
  overall: AnalyticsLabelEnum;
  summary: string;
  keyMetrics: KeyDataType;
  description: string;
};

export enum VitalFinancialHealthOverall {
  EXCELLENT = "Excellent",
  ABOVE_AVERAGE = "Above Average",
  AVERAGE = "Average",
  BELOW_AVERAGE = "Below Average",
  POOR = "Poor",
  NONE = "None",
}

export type StockVitalFinancialHealth = {
  overall: VitalFinancialHealthOverall;
  summary: string;
  keyMetrics: KeyDataType;
  description: string;
};

export enum VitalInvestmentType {
  INCOME_STOCK = "Income Stock",
  VALUE_STOCK = "Value stock",
  GROWTH_STOCK = "Growth stock",
}

export type StockVitalInvestmentType = {
  type: VitalInvestmentType;
  summary: string;
  description: string;
};

export type StockVitals = {
  openaiAnalysedAt?: Timestamp;
  financialHealth?: StockVitalFinancialHealth;
  investmentType?: StockVitalInvestmentType;
  dividend?: StockVitalDividend;
  analystRating?: StockVitalAnalystRating;
  lastExecutionStatus?: "success" | "error";
  lastExecutionError?: string | null;
};
