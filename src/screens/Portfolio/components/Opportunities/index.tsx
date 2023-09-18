import { useNavigation } from "@react-navigation/native";
import { FC } from "react";
import { View } from "react-native";
import { NativeStackNavigationProp } from "react-native-screens/native-stack";
import { NEMES } from "./helpers";
import { styles } from "./styles";
import PrimaryText from "../../../../components/PrimaryText";
import NemesList from "../../../../components/NemesList";
import PrimaryButton from "../../../../components/PrimaryButton";
import { COLORS } from "../../../../constants/colors";
import { RootStackParamList } from "../../../../types/navigation";

const Opportunities: FC = () => {
  const { navigate } = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const moveToNemesPage = () => {
    navigate("Nemes", { filter: "All" });
  };

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <PrimaryText fontSize={24} fontWeight={700}>
          Browse investment opportunities
        </PrimaryText>
        <PrimaryText fontSize={16}>
          Our <PrimaryText fontWeight={700}>nemes</PrimaryText> are collections of stocks exposed to
          hot trends, topics, and sectors. Don&apos;t miss the chance to reap fantastic benefits
          from the next big investment opportunity, start exploring 🤑
        </PrimaryText>
      </View>
      <View style={styles.content}>
        <NemesList nemes={NEMES} displayedNemesNumber={5} />
      </View>
      <View style={{ paddingHorizontal: 16 }}>
        <PrimaryButton
          title="Explore more nemes"
          size="large"
          backgroundColor={COLORS.black}
          textColor={COLORS.white}
          fontWeight={700}
          fontSize={16}
          pressHandler={moveToNemesPage}
        />
      </View>
    </View>
  );
};

export default Opportunities;
