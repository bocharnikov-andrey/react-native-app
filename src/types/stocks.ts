export type StockItem = {
  id: string;
  title: string;
  description: string;
  picture: string;
  price: number;
  profit: number;
  lastDayPriceInfo: StockPriceInfo;
  reopenMarketTime: string;
};

export type StockPriceInfo = {
  price: number;
  eodPrice: number;
  priceDelta: number;
  percentageChange: number;
};
