import { FC, ReactNode } from "react";
import { View, ViewProps } from "react-native";
import PrimaryText from "components/PrimaryText";
import { COLORS } from "constants/colors";
import { styles } from "./styles";

type Props = ViewProps & {
  title: string;
  rightSide?: ReactNode;
};

const ModuleHeader: FC<Props> = ({ title, rightSide, style, ...viewProps }) => {
  return (
    <View {...viewProps} style={[styles.container, style]}>
      <PrimaryText
        fontSize={24}
        fontWeight={700}
        textColor={COLORS.white}
      >
        {title}
      </PrimaryText>
      {rightSide}
    </View>
  );
};

export default ModuleHeader;
