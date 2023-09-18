import { FC } from "react";
import { StyleSheet } from "react-native";
import PrimaryText from "../PrimaryText";
import { COLORS } from "../../constants/colors";
import ViewCenter from "../layout/ViewCenter";
import ViewRow from "../layout/ViewRow";
import { ClockIcon } from "../../constants/icons";

type Props = {
  estimationTime: string;
};

const EstimationBadge: FC<Props> = ({ estimationTime }) => {
  return (
    <ViewRow jc="flex-start" style={styles.container}>
      <ViewCenter style={styles.iconContainer}>
        <ClockIcon color={COLORS.whiteOpacity_60} />
      </ViewCenter>
      <PrimaryText textColor={COLORS.whiteOpacity_60} style={{ fontStyle: "italic" }}>
        Usually takes {estimationTime}
      </PrimaryText>
    </ViewRow>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-start",
    height: 30,
    paddingLeft: 8,
    paddingRight: 16,
    borderRadius: 30,
    backgroundColor: COLORS.whiteOpacity_5,
  },
  iconContainer: {
    marginRight: 4,
  },
});

export default EstimationBadge;
