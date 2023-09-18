import { FC } from "react";
import { FlatList } from "react-native";
import PrimaryText from "../../../../../../components/PrimaryText";

const CREATE_ACCOUNT_STEPS = [
  "6,000+ global stocks and ETFs;",
  "Invest in any stock from just $1;",
  "0% Commission;",
  "Deposit protection up to $500,000;",
  "ADGM FSRA regulated.",
];

const FeaturesList: FC = () => {
  return (
    <FlatList
      data={CREATE_ACCOUNT_STEPS}
      renderItem={({ item }) => (
        <PrimaryText fontWeight={400} fontSize={16}>{`\u2022 ${item}`}</PrimaryText>
      )}
      keyExtractor={(item) => item}
    />
  );
};

export default FeaturesList;
