import { FC } from "react";
import { ImageBackground, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import PrimaryText from "components/PrimaryText";
import PrimaryButton from "components/PrimaryButton";
import { COLORS } from "constants/colors";
import { styles } from "./styles";

type Props = {};

const EmptyState: FC<Props> = () => {
  const handleFindOpportunitiesPress = () => {
    console.log("Find opportunities click");
  };

  return (
    <ImageBackground
      source={require("../../../../../../../assets/images/for-you.png")}
      resizeMode="cover"
      style={styles.imageBgContainer}
      imageStyle={styles.imageBgImage}
    >
      <LinearGradient
        colors={['rgba(103, 103, 103, 0.01)', '#121212']}
        locations={[0, 1]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.gradientContainer}
      >
        <View style={styles.description}>
          <PrimaryText
            fontSize={24}
            fontWeight={500}
            textColor={COLORS.white}
          >
            Let’s get started
          </PrimaryText>
          <PrimaryText
            fontSize={16}
            fontWeight={500}
            textColor={COLORS.white}
          >
            Answer just two questions to discover investment opportunities
            tailored to you.
          </PrimaryText>
        </View>
        <PrimaryButton
          title="Find Opportunities"
          backgroundColor={COLORS.lightBlue}
          size="large"
          fontWeight={500}
          fontSize={16}
          pressHandler={handleFindOpportunitiesPress}
        />
      </LinearGradient>
    </ImageBackground>
  );
};

export default EmptyState;
