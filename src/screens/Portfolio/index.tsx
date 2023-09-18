import { StyleSheet } from "react-native";
import { FC } from "react";
import Heading from "./components/Heading";
import OnboardingSteps from "./components/OnboardingSteps";
import Opportunities from "./components/Opportunities";
import { COLORS } from "../../constants/colors";
import PageContainer from "../../components/layout/PageContainer";

const Portfolio: FC = () => {
  return (
    <PageContainer style={styles.container}>
      <Heading />
      <OnboardingSteps />
      <Opportunities />
    </PageContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.black,
  },
});

export default Portfolio;
