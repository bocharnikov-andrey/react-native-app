import { AverageDatapoints, CollectionsSubcategory, ThemeLight, ThemeTemplate } from "../../../types/theme";
import { ModuleFeaturedAverageDatapointTypes, ModuleTendencyDatapointTypes } from "../../../types/module";
import { avgDatapoints } from "./avgDatapoints";
import { aaplStockLight, msftStockLight, nvdaStockLight, test4StockLight, test5StockLight } from "./stock";

const commonTheme: ThemeLight = {
  id: "123",
  name: "Top stocks",
  template: ThemeTemplate.CUSTOM_TEMPLATE,
  category: "category_id",
  subcategory: CollectionsSubcategory.INDUSTRIES,
  shortDescription: "Lorem ipsum",
  innerDescription: "Lorem ipsum dolor sit amet consectetur, adipiscing elit nullam ullamcorper.",
  picture: "https://firebasestorage.googleapis.com/v0/b/nemo-trunk.appspot.com/o/themes%2FtXPKsuOzyltLYHChdteo_mediumSmall?alt=media",
  pictures: {
    small: "https://firebasestorage.googleapis.com/v0/b/nemo-trunk.appspot.com/o/themes%2FtXPKsuOzyltLYHChdteo_mediumSmall?alt=media",
    mediumSmall: "https://firebasestorage.googleapis.com/v0/b/nemo-trunk.appspot.com/o/themes%2FtXPKsuOzyltLYHChdteo_mediumSmall?alt=media",
    medium: "https://firebasestorage.googleapis.com/v0/b/nemo-trunk.appspot.com/o/themes%2FtXPKsuOzyltLYHChdteo_mediumSmall?alt=media",
    large: "https://firebasestorage.googleapis.com/v0/b/nemo-trunk.appspot.com/o/themes%2FtXPKsuOzyltLYHChdteo_mediumSmall?alt=media",
  },
  profitDelta: 10,
  newsDelta: 12,
  tags: ["Denys", "tech", "Nemo"],
  averageDatapoints: avgDatapoints,
  datapoints: ["123", "321"],
  featuredDatapoint: "123",
  visualizations: {
    targetPrice: false,
  },
  favoriteId: "123",
  stockSymbols: [
    aaplStockLight,
    nvdaStockLight,
    msftStockLight,
    test4StockLight,
    test5StockLight,
  ] as any,
};

export const testTheme1: ThemeLight = {
  ...commonTheme,
  id: "1",
  name: "Top stocks",
  picture: "https://firebasestorage.googleapis.com/v0/b/nemo-trunk.appspot.com/o/themes%2FtXPKsuOzyltLYHChdteo_mediumSmall?alt=media",
  pictures: {
    small: "https://firebasestorage.googleapis.com/v0/b/nemo-trunk.appspot.com/o/themes%2FtXPKsuOzyltLYHChdteo_mediumSmall?alt=media",
    mediumSmall: "https://firebasestorage.googleapis.com/v0/b/nemo-trunk.appspot.com/o/themes%2FtXPKsuOzyltLYHChdteo_mediumSmall?alt=media",
    medium: "https://firebasestorage.googleapis.com/v0/b/nemo-trunk.appspot.com/o/themes%2FtXPKsuOzyltLYHChdteo_mediumSmall?alt=media",
    large: "https://firebasestorage.googleapis.com/v0/b/nemo-trunk.appspot.com/o/themes%2FtXPKsuOzyltLYHChdteo_mediumSmall?alt=media",
  },
  shortDescription: "These are stocks of companies that are leading the development and adoption of artificial intelligence (AI) technologies.",
  // shortDescription: "<p><strong>The Analyst Stock Recommendations</strong> are determined by taking an average of all analyst <a href=\"https://google.com\" rel=\"noopener noreferrer\" target=\"_blank\">recommendations</a> and classifying them as Strong Buy, Buy, Hold, Sell or Strong Sell (Short)</p>",
  // shortDescription: "<p>the stocks or investments that have experienced the highest percentage increase in value within a specified period.</p>",
};

export const testTheme2: ThemeLight = {
  ...commonTheme,
  id: "2",
  name: "Hot runners",
  picture: "https://firebasestorage.googleapis.com/v0/b/nemo-trunk.appspot.com/o/themes%2Fk3mdUVCoQaX5EbTpBDTF_mediumSmall?alt=media",
  pictures: {
    small: "https://firebasestorage.googleapis.com/v0/b/nemo-trunk.appspot.com/o/themes%2Fk3mdUVCoQaX5EbTpBDTF_mediumSmall?alt=media",
    mediumSmall: "https://firebasestorage.googleapis.com/v0/b/nemo-trunk.appspot.com/o/themes%2Fk3mdUVCoQaX5EbTpBDTF_mediumSmall?alt=media",
    medium: "https://firebasestorage.googleapis.com/v0/b/nemo-trunk.appspot.com/o/themes%2Fk3mdUVCoQaX5EbTpBDTF_mediumSmall?alt=media",
    large: "https://firebasestorage.googleapis.com/v0/b/nemo-trunk.appspot.com/o/themes%2Fk3mdUVCoQaX5EbTpBDTF_mediumSmall?alt=media",
  },
  averageDatapoints: {
    ...avgDatapoints,
    [ModuleFeaturedAverageDatapointTypes.AVG_PRICE_CHANGE_1_DAY]: {
      ...avgDatapoints[ModuleFeaturedAverageDatapointTypes.AVG_PRICE_CHANGE_1_DAY],
      [ModuleTendencyDatapointTypes.POSITIVE_AND_NEGATIVE_AVERAGE_DATAPOINTS]: {
        value: -23,
        absoluteValue: 23,
      },
    },
  },
};

export const testTheme3: ThemeLight = {
  ...commonTheme,
  id: "3",
  name: "Sport cars",
  picture: "https://firebasestorage.googleapis.com/v0/b/nemo-trunk.appspot.com/o/themes%2FZMoANGZ0WQYUzQDoXX8j_mediumSmall?alt=media",
  pictures: {
    small: "https://firebasestorage.googleapis.com/v0/b/nemo-trunk.appspot.com/o/themes%2FZMoANGZ0WQYUzQDoXX8j_mediumSmall?alt=media",
    mediumSmall: "https://firebasestorage.googleapis.com/v0/b/nemo-trunk.appspot.com/o/themes%2FZMoANGZ0WQYUzQDoXX8j_mediumSmall?alt=media",
    medium: "https://firebasestorage.googleapis.com/v0/b/nemo-trunk.appspot.com/o/themes%2FZMoANGZ0WQYUzQDoXX8j_mediumSmall?alt=media",
    large: "https://firebasestorage.googleapis.com/v0/b/nemo-trunk.appspot.com/o/themes%2FZMoANGZ0WQYUzQDoXX8j_mediumSmall?alt=media",
  },
};
