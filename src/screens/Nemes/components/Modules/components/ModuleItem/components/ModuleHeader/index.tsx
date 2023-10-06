import { FC, ReactNode } from "react";
import { View } from "react-native";
import PrimaryText from "components/PrimaryText";
import { COLORS } from "constants/colors";
import { styles } from "./styles";

type Props = {
  title: string;
  rightSide?: ReactNode;
};

const ModuleHeader: FC<Props> = ({ title, rightSide }) => {
  return (
    <View style={styles.container}>
      <PrimaryText
        textColor={COLORS.whiteOpacity_80}
        fontSize={24}
        fontWeight={700}
      >
        {title}
      </PrimaryText>
      {rightSide}
    </View>
  );
};

export default ModuleHeader;
