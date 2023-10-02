export type StockItem = {
  id: string;
  title: string;
  key: string;
  description: string;
  picture: string;
  price: number;
  profit: number;
  lastDayPriceInfo: StockPriceInfo;
  reopenMarketTime: string;
  percentOwnedByHedgeFonds: number;
  category: StockCategory;
};

export type StockPriceInfo = {
  price: number;
  eodPrice: number;
  priceDelta: number;
  percentageChange: number;
};

export type StockCategory = "Category";
