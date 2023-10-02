import { FC } from "react";
import { StyleSheet, View } from "react-native";
import PrimaryText from "../../PrimaryText";
import { COLORS } from "../../../constants/colors";
import { margin } from "../../../mixins";

type Props = {
  stockName: string;
  percentOwnedByHedgeFond: number;
};

const AdditionalInfo: FC<Props> = ({ stockName, percentOwnedByHedgeFond }) => {
  return (
    <View style={styles.container}>
      <PrimaryText fontSize={14} fontWeight={400} textColor={COLORS.blackOpacity_60}>
        {percentOwnedByHedgeFond}% of {stockName} os owned by Hedge fond
      </PrimaryText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderLeftColor: COLORS.blackOpacity_20,
    borderLeftWidth: 1,
    ...margin(8, 8, 8, 28),
    paddingLeft: 32,
  },
});

export default AdditionalInfo;
