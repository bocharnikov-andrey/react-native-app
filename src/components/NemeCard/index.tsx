import { FC } from "react";
import { Image, View } from "react-native";
import { styles } from "./styles";
import PrimaryText from "../PrimaryText";
import ViewCenter from "../layout/ViewCenter";
import { StarIcon } from "../../constants/icons";
import { COLORS } from "../../constants/colors";
import { Neme } from "../../types/nemes";
import InfoContainer from "./InfoContainer";

type Props = {
  neme: Neme;
  isExtended?: boolean;
};

const NemeCard: FC<Props> = ({ neme, isExtended }) => {
  const isStarred = false;
  const style = styles({ isExtended });

  return (
    <View style={style.container}>
      <View>
        <View style={style.starContainer}>
          <ViewCenter style={style.starWrapper}>
            <StarIcon color={isStarred ? COLORS.yellow : COLORS.whiteOpacity_60} />
          </ViewCenter>
        </View>
        <View style={style.imageContainer}>
          <Image source={{ uri: neme.picture }} style={style.image} />
        </View>
        {!isExtended ? (
          <InfoContainer title={neme.title} stocksLength={neme.stocks.length} />
        ) : (
          <View style={style.stocksLengthText}>
            <PrimaryText fontSize={12} textColor={COLORS.whiteOpacity_60} italicText>
              {neme.stocks.length} opportunities
            </PrimaryText>
          </View>
        )}
      </View>
      {isExtended && (
        <View style={style.shortDescription}>
          <PrimaryText
            fontSize={16}
            fontWeight={700}
            textColor={COLORS.white}
            style={{ marginBottom: 4 }}
          >
            {neme.title}
          </PrimaryText>
          <PrimaryText textColor={COLORS.whiteOpacity_80}>{neme.shortDescription}</PrimaryText>
        </View>
      )}
    </View>
  );
};

export default NemeCard;
