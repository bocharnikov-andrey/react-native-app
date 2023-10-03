import { FC } from "react";
import { View, StyleSheet } from "react-native";
import PrimaryText from "../../../../../../../../../../components/PrimaryText";
import { AverageDatapoints } from "../../../../../../../../../../types/theme";
import {
  ModuleFeaturedAverageDatapointTypes,
  ModuleTendencyDatapointTypes
} from "../../../../../../../../../../types/module";
import { getDatapointLabel, getFormattedDatapointValue } from "./utils";

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
    <View style={styles.container}>
      <PrimaryText
        fontWeight={500}
        textColor={datapointValue.color}
      >
        {datapointValue.formattedValue}
      </PrimaryText>
      <PrimaryText fontWeight={500}>
        {getDatapointLabel(datapointValue.value, featuredAverageDatapoint)}
      </PrimaryText>
    </View>
  );
};

// <Typography variant="bodyMMedium" color={COLOR_WHITE_80}>
//         {getDatapointLabel(datapointValue.value, featuredAverageDatapoint)}
//       </Typography>

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 4,
    flexWrap: "wrap",
  },
});

export default DatapointData;
