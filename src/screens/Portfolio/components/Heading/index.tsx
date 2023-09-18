import { FC } from "react";
import { View } from "react-native";
import PrimaryText from "../../../../components/PrimaryText";

const Heading: FC = () => {
  return (
    <View style={{ paddingHorizontal: 16, paddingVertical: 24 }}>
      <PrimaryText fontSize={32} fontWeight={500}>
        Hello
      </PrimaryText>
      <View style={{ marginTop: 16 }}>
        <PrimaryText fontSize={16}>Here’s an overview of your account and portfolio</PrimaryText>
      </View>
    </View>
  );
};

export default Heading;
