import { FC } from "react";
import PrimaryText from "components/PrimaryText";
import ViewRow from "components/layout/ViewRow";
import { AverageDatapoints } from "types/theme";
import {
  ModuleFeaturedAverageDatapointTypes,
  ModuleTendencyDatapointTypes
} from "types/module";
import { getDatapointLabel, getFormattedDatapointValue } from "./utils";
import { styles } from "./styles";

type Props = {
  averageDatapoints: AverageDatapoints;
  featuredAverageDatapoint: ModuleFeaturedAverageDatapointTypes;
  tendencyDatapoints: ModuleTendencyDatapointTypes;
};

const DatapointData: FC<Props> = (props) => {
  const {
    averageDatapoints,
    featuredAverageDatapoint,
    tendencyDatapoints
  } = props;

  const datapointValue = getFormattedDatapointValue(
    featuredAverageDatapoint,
    tendencyDatapoints,
    averageDatapoints
  );

  return (
    <ViewRow style={styles.container} jc="flex-start">
      <PrimaryText
        fontWeight={500}
        textColor={datapointValue.color}
      >
        {datapointValue.formattedValue}
      </PrimaryText>
      <PrimaryText fontWeight={500}>
        {getDatapointLabel(datapointValue.value, featuredAverageDatapoint)}
      </PrimaryText>
    </ViewRow>
  );
};

export default DatapointData;
