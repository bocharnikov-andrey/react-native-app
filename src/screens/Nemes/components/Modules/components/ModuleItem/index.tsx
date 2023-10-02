import { FC } from "react";
import { View, StyleSheet } from "react-native";
import { COLORS } from "../../../../../../constants/colors";
import ModuleHeader from "./components/ModuleHeader";
import PrimaryText from "../../../../../../components/PrimaryText";
import { ModuleLayoutTypes, ModuleTypes } from "../../../../../../types/module";

type Props = {};

const ModuleItem: FC<Props> = () => {
  const type = ModuleTypes.nemeModule as any;
  const layout = ModuleLayoutTypes.LARGE_TILE as any;
  const name = "Denys' module";
  const isVisibleSeeAllLink = true;

  const isGreyVariant =
    (type === ModuleTypes.nemeModule &&
      layout === ModuleLayoutTypes.LARGE_TILE) ||
    type === ModuleTypes.marketModule;

  const componentStyles = styles({ isGreyVariant });

  const handleSeeAllPress = () => {
    console.log("See all pressed");
  };

  return (
    <View style={componentStyles.container}>
      <ModuleHeader
        title={name}
        rightSide={
          isVisibleSeeAllLink && (
            <PrimaryText
              style={componentStyles.seeAllLink}
              fontSize={16}
              fontWeight={500}
              onPress={handleSeeAllPress}
            >
              See all
            </PrimaryText>
          )
        }
      />
    </View>
  );
};

type StylesProps = {
  isGreyVariant?: boolean;
};

const styles = ({ isGreyVariant }: StylesProps) => StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: isGreyVariant ? COLORS.whiteOpacity_10 : "initial",
    rowGap: 16,
    // padding: "1.5rem 0",
  },
  seeAllLink: {
    textDecorationLine: "underline",
  },
});

export default ModuleItem;