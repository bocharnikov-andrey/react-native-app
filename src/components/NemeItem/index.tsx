import { FC } from "react";
import { Image, View } from "react-native";
import { styles } from "./styles";
import PrimaryText from "../PrimaryText";
import ViewRow from "../layout/ViewRow";
import ViewCenter from "../layout/ViewCenter";
import { RightArrowIcon, StarIcon } from "../../constants/icons";
import { COLORS } from "../../constants/colors";
import { Neme } from "../../types/nemes";

type Props = {
  title: string;
  opportunitiesNumber: number;
  // neme: Neme;
};

const NemeItem: FC<Props> = (props) => {
  const isStarred = false;

  return (
    <View style={styles.container}>
      <View style={styles.starContainer}>
        <ViewCenter style={styles.starWrapper}>
          <StarIcon color={isStarred ? COLORS.yellow : COLORS.whiteOpacity_60} />
        </ViewCenter>
      </View>
      <View style={styles.imageContainer}>
        <Image source={require("../../../assets/images/opportunity.webp")} style={styles.image} />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoTitle}>
          <PrimaryText fontSize={17} fontWeight={700} textColor={COLORS.white}>
            {props.title}
          </PrimaryText>
        </View>
        <ViewRow ai="flex-end">
          <PrimaryText fontSize={12} textColor={COLORS.whiteOpacity_60} italicText>
            {props.opportunitiesNumber} opportunities
          </PrimaryText>
          <RightArrowIcon color={COLORS.whiteOpacity_80} />
        </ViewRow>
      </View>
    </View>
  );
};

export default NemeItem;
