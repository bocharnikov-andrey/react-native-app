import { FC } from "react";
import { View } from "react-native";
import FeaturesList from "./FeaturesList";
import EstimationBadge from "../../../../../components/EstimationBadge";
import ViewRow from "../../../../../components/layout/ViewRow";
import PrimaryButton from "../../../../../components/PrimaryButton";
import { COLORS } from "../../../../../constants/colors";

const CreateAccountInfo: FC = () => {
  return (
    <View style={{ gap: 16 }}>
      <EstimationBadge estimationTime="30 seconds" />
      <FeaturesList />
      <ViewRow jc="flex-start" style={{ gap: 16 }}>
        <PrimaryButton
          title="Create account"
          backgroundColor={COLORS.lightBlue}
          size="large"
          fontWeight={500}
          fontSize={16}
          pressHandler={() => null}
        />
        <PrimaryButton
          title="Log in"
          backgroundColor={COLORS.whiteOpacity_10}
          size="large"
          fontWeight={500}
          fontSize={16}
          pressHandler={() => null}
        />
      </ViewRow>
    </View>
  );
};

export default CreateAccountInfo;
