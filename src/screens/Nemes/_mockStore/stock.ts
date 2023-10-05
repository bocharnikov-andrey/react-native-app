import { StockSymbolLight } from "../../../types/symbol";

const baseStockSymbolLight: StockSymbolLight = {
  id: "1",
  label: "Apple",
  name: "AAPL",
  updatedAt: new Date(),
  category: "Tech",
  description: "Lorem ipsum",
  economicSector: "Tech sector",
  industryGroup: "Tech industry",
  analystSentiment: 4,
  picture: "https://firebasestorage.googleapis.com/v0/b/nemo-trunk.appspot.com/o/symbols%2FNVDA_small?alt=media",
  price: 234,
  lastDayPriceDeltaPercent: 12,
  lastWeekPriceDeltaPercent: 15,
  lastMonthPriceDeltaPercent: 23,
  lastAnalystSentimentChange: {
    nextSentiment: 4.3,
    previousSentiment: 3.2,
    date: new Date(),
  },
  datapoints: {
    datapoint1: 123
  },
  tradingVolumeDailyChange: 19,
  randomOrder: 1,
};

export const aaplStockLight: StockSymbolLight = {
  ...baseStockSymbolLight,
  id: "1",
  label: "Apple",
  name: "AAPL",
  picture: "https://firebasestorage.googleapis.com/v0/b/nemo-trunk.appspot.com/o/symbols%2FAAPL_small?alt=media",
};

export const nvdaStockLight: StockSymbolLight = {
  ...baseStockSymbolLight,
  id: "2",
  label: "Nvidia",
  name: "NVDA",
  picture: "https://firebasestorage.googleapis.com/v0/b/nemo-trunk.appspot.com/o/symbols%2FNVDA_small?alt=media",
};

export const msftStockLight: StockSymbolLight = {
  ...baseStockSymbolLight,
  id: "3",
  label: "Microsoft",
  name: "MSFT",
  picture: "https://firebasestorage.googleapis.com/v0/b/nemo-trunk.appspot.com/o/symbols%2FMSFT_small?alt=media"
};

export const test4StockLight: StockSymbolLight = {
  ...baseStockSymbolLight,
  id: "4",
  label: "ABB Ltd.",
  name: "ABB",
  picture: "https://firebasestorage.googleapis.com/v0/b/nemo-trunk.appspot.com/o/symbols%2FABB_small?alt=media"
};

export const test5StockLight: StockSymbolLight = {
  ...baseStockSymbolLight,
  id: "5",
  label: "Bank of America with very long name",
  name: "BAA",
  picture: "https://firebasestorage.googleapis.com/v0/b/nemo-trunk.appspot.com/o/symbols%2FBAC_small?alt=media"
};
