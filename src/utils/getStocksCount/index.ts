import { ThemeTemplate } from "../../types/theme";

export const getStocksCount = (
  template: ThemeTemplate,
  analystRatingsChangeTotalAmount: number,
  stockSymbols: number
) => {
  if (template === ThemeTemplate.ANALYST_RATINGS_CHANGES_TEMPLATE) {
    return analystRatingsChangeTotalAmount;
  }

  if (
    template === ThemeTemplate.TOP_MOVERS_TEMPLATE ||
    template === ThemeTemplate.ANALYST_RATINGS_TEMPLATE ||
    template === ThemeTemplate.TOP_GAINERS_TEMPLATE ||
    template === ThemeTemplate.TOP_LOSERS_TEMPLATE
  ) {
    return 50;
  }

  if (
    template === ThemeTemplate.TRENDING_ON_REDDIT_TEMPLATE ||
    template === ThemeTemplate.TRENDING_ON_YOUTUBE_TEMPLATE ||
    template === ThemeTemplate.STOCKS_MENTIONS_ON_TWITTER_TEMPLATE
  ) {
    return 10;
  }

  return stockSymbols;
};
