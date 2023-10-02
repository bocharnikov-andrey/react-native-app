import { FC, ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import PrimaryText from "../../../../../../../../components/PrimaryText";
import { COLORS } from "../../../../../../../../constants/colors";

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

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // column-gap: 1rem;
  },
});

export default ModuleHeader;
