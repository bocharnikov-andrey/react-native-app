import { FC, ReactNode } from "react";
import { FlatList } from "react-native";
import { StepType, STEPS, getStepIcon } from "./helpers";
import Step from "./Step";
import CreateAccountInfo from "./CreateAccountInfo";

const onboardingStepContent: Record<number, ReactNode> = {
  1: <CreateAccountInfo />,
  2: null,
  3: null,
  4: null,
  5: null,
};

const OnboardingSteps: FC = () => {
  const renderStep = (item: StepType, stepNumber: number) => {
    const isActive = stepNumber === 1;
    const icon = getStepIcon(stepNumber, isActive);
    const content = onboardingStepContent[stepNumber];

    return (
      <Step
        icon={icon}
        listPositionNumber={stepNumber}
        title={item.title}
        isActive={isActive}
        content={content}
      />
    );
  };

  return (
    <FlatList
      data={STEPS}
      renderItem={({ item, index }) => renderStep(item, index + 1)}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ rowGap: 4 }}
    />
  );
};

export default OnboardingSteps;
