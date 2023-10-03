import {
  ModuleFeaturedAverageDatapointTypes,
  ModuleTendencyDatapointTypes
} from "../../../../../../../../../../types/module";
import { AverageDatapoints } from "../../../../../../../../../../types/theme";
import { formatLongAmountInMillions } from "../../../../../../../../../../utils/formatLongAmount";
import { COLORS } from "../../../../../../../../../../constants/colors";

export const getDatapointLabel = (
  value: number,
  featuredDatapoint: ModuleFeaturedAverageDatapointTypes
): string => {
  const prefix = value >= 0 ? "UP" : "DOWN";

  return {
    [ModuleFeaturedAverageDatapointTypes.AVG_MARKET_CAP]: "Average market cap",
    [ModuleFeaturedAverageDatapointTypes.AVG_PRICE_CHANGE_1_DAY]: `${prefix} in the last day`,
    [ModuleFeaturedAverageDatapointTypes.AVG_PRICE_CHANGE_1_WEEK]: `${prefix} in the last week`,
    [ModuleFeaturedAverageDatapointTypes.AVG_PRICE_CHANGE_1_MONTH]: `${prefix} in the last month`,
  }[featuredDatapoint];
};

const getDatapointColor = (value: number): string => {
  if (value > 0) {
    return COLORS.springGreenAle;
  }
  if (value < 0) {
    return COLORS.rose;
  }
  return COLORS.white;
};

const formatAvgPriceChangeValue = (value: number): string => {
  return `${Math.abs(value).toFixed(2)}%`;
};

type FormattedDatapointValue = {
  value: number;
  formattedValue: string;
  color: string;
};
export const getFormattedDatapointValue = (
  featuredDatapoint: ModuleFeaturedAverageDatapointTypes,
  tendency: ModuleTendencyDatapointTypes,
  averageDatapoints: AverageDatapoints
): FormattedDatapointValue => {
  const datapointValue = averageDatapoints[featuredDatapoint][tendency];
  const isMarketCap =
    featuredDatapoint === ModuleFeaturedAverageDatapointTypes.AVG_MARKET_CAP;

  if (isMarketCap) {
    return {
      formattedValue: formatLongAmountInMillions(
        datapointValue.value
      ).toString(),
      value: datapointValue.value,
      color: getDatapointColor(datapointValue.value),
    };
  }

  return {
    formattedValue: formatAvgPriceChangeValue(datapointValue.value),
    value: datapointValue.value,
    color: getDatapointColor(datapointValue.value),
  };
};
