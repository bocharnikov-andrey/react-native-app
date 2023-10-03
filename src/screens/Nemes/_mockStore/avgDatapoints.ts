import { AverageDatapoints } from "../../../types/theme";
import { ModuleFeaturedAverageDatapointTypes, ModuleTendencyDatapointTypes } from "../../../types/module";

export const avgDatapoints: AverageDatapoints = {
  [ModuleFeaturedAverageDatapointTypes.AVG_MARKET_CAP]: {
    [ModuleTendencyDatapointTypes.NEGATIVE_AVERAGE_DATAPOINT]: {
      value: -10,
      absoluteValue: 10,
    },
    [ModuleTendencyDatapointTypes.POSITIVE_AVERAGE_DATAPOINT]: {
      value: 10,
      absoluteValue: 10,
    },
    [ModuleTendencyDatapointTypes.POSITIVE_AND_NEGATIVE_AVERAGE_DATAPOINTS]: {
      value: 10,
      absoluteValue: 10,
    },
  },
  [ModuleFeaturedAverageDatapointTypes.AVG_PRICE_CHANGE_1_DAY]: {
    [ModuleTendencyDatapointTypes.NEGATIVE_AVERAGE_DATAPOINT]: {
      value: -10,
      absoluteValue: 10,
    },
    [ModuleTendencyDatapointTypes.POSITIVE_AVERAGE_DATAPOINT]: {
      value: 10,
      absoluteValue: 10,
    },
    [ModuleTendencyDatapointTypes.POSITIVE_AND_NEGATIVE_AVERAGE_DATAPOINTS]: {
      value: 10,
      absoluteValue: 10,
    },
  },
  [ModuleFeaturedAverageDatapointTypes.AVG_PRICE_CHANGE_1_WEEK]: {
    [ModuleTendencyDatapointTypes.NEGATIVE_AVERAGE_DATAPOINT]: {
      value: -10,
      absoluteValue: 10,
    },
    [ModuleTendencyDatapointTypes.POSITIVE_AVERAGE_DATAPOINT]: {
      value: 10,
      absoluteValue: 10,
    },
    [ModuleTendencyDatapointTypes.POSITIVE_AND_NEGATIVE_AVERAGE_DATAPOINTS]: {
      value: 10,
      absoluteValue: 10,
    },
  },
  [ModuleFeaturedAverageDatapointTypes.AVG_PRICE_CHANGE_1_MONTH]: {
    [ModuleTendencyDatapointTypes.NEGATIVE_AVERAGE_DATAPOINT]: {
      value: -10,
      absoluteValue: 10,
    },
    [ModuleTendencyDatapointTypes.POSITIVE_AVERAGE_DATAPOINT]: {
      value: 10,
      absoluteValue: 10,
    },
    [ModuleTendencyDatapointTypes.POSITIVE_AND_NEGATIVE_AVERAGE_DATAPOINTS]: {
      value: 10,
      absoluteValue: 10,
    },
  },
};
