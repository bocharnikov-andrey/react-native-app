import { ThemeLight, ThemeTemplate } from "../../../../../../../../../../types/theme";

export const getThemeStockLength = (theme: ThemeLight): number => {
  switch (theme.template) {
    case ThemeTemplate.TOP_MOVERS_TEMPLATE:
    case ThemeTemplate.TOP_GAINERS_TEMPLATE:
    case ThemeTemplate.TOP_LOSERS_TEMPLATE:
    case ThemeTemplate.ANALYST_RATINGS_TEMPLATE:
    case ThemeTemplate.ANALYST_RATINGS_CHANGES_TEMPLATE:
      return Math.min(50, theme.stockSymbols.length);
    case ThemeTemplate.TRENDING_ON_REDDIT_TEMPLATE:
    case ThemeTemplate.STOCKS_MENTIONS_ON_TWITTER_TEMPLATE:
    case ThemeTemplate.TRENDING_ON_YOUTUBE_TEMPLATE:
      return Math.min(10, theme.stockSymbols.length);
    case ThemeTemplate.CUSTOM_TEMPLATE:
    case ThemeTemplate.SPOTLIGHT_TEMPLATE:
      return theme.stockSymbols.length;
    default:
      return theme.stockSymbols.length;
  }
};
