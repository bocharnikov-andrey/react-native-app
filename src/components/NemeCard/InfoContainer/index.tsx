import { FC } from "react";
import { View } from "react-native";
import { styles } from "./styles";
import PrimaryText from "../../PrimaryText";
import { COLORS } from "../../../constants/colors";
import ViewRow from "../../layout/ViewRow";
import { RightArrowIcon } from "../../../constants/icons";

type Props = {
  title: string;
  stocksLength: number;
  isExtended?: boolean;
};

const InfoContainer: FC<Props> = ({ title, stocksLength, isExtended }) => {
  const style = styles({ isExtended });

  return (
    <View style={style.infoContainer}>
      <View style={style.infoTitle}>
        <PrimaryText fontSize={17} fontWeight={700} textColor={COLORS.white}>
          {title}
        </PrimaryText>
      </View>
      <ViewRow ai="flex-end">
        <PrimaryText fontSize={12} textColor={COLORS.whiteOpacity_60} italicText>
          {stocksLength} opportunities
        </PrimaryText>
        <RightArrowIcon color={COLORS.whiteOpacity_80} />
      </ViewRow>
    </View>
  );
};

export default InfoContainer;
