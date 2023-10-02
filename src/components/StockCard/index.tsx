import { FC } from "react";
import { Image, View } from "react-native";
import { styles } from "./styles";
import { StockItem } from "../../types/stocks";
import ViewRow from "../layout/ViewRow";
import ViewCenter from "../layout/ViewCenter";
import PrimaryText from "../PrimaryText";
import { RightAngleIcon, RightArrowIcon, StarIcon } from "../../constants/icons";
import { COLORS } from "../../constants/colors";
import AdditionalInfo from "./AdditionalInfo";

type Props = {
  stock: StockItem;
  isExtended?: boolean;
};

const StockCard: FC<Props> = ({ stock, isExtended }) => {
  const style = styles({ isExtended });

  return (
    <ViewRow ai="center" style={style.container}>
      <View style={style.contentWrapper}>
        <ViewRow style={style.content} jc="space-between" ai="flex-start">
          <ViewRow jc="flex-start" style={style.description}>
            <View style={style.imageContainer}>
              <Image source={{ uri: stock.picture }} style={style.image} />
            </View>
            <View style={{ alignSelf: "flex-start" }}>
              <PrimaryText fontSize={16} fontWeight={500} textColor={COLORS.black}>
                {stock.title}
              </PrimaryText>
              <PrimaryText fontSize={14} fontWeight={400} textColor={COLORS.blackOpacity_60}>
                {stock.key}
              </PrimaryText>
            </View>
          </ViewRow>
          <View style={style.priceBlock}>
            <PrimaryText
              fontSize={16}
              fontWeight={500}
              textColor={COLORS.blackOpacity_80}
              style={{ alignSelf: "flex-end" }}
            >
              {stock.price}$
            </PrimaryText>
            <PrimaryText
              fontSize={12}
              fontWeight={700}
              textColor={stock.profit >= 0 ? COLORS.darkGreen : COLORS.red}
              style={{ alignSelf: "flex-end" }}
            >
              {stock.profit}%
            </PrimaryText>
          </View>
        </ViewRow>
        {isExtended && (
          <AdditionalInfo
            stockName={stock.title}
            percentOwnedByHedgeFond={stock.percentOwnedByHedgeFonds}
          />
        )}
      </View>
      {!isExtended ? (
        <ViewCenter style={style.action}>
          <StarIcon color={COLORS.blackOpacity_10} />
        </ViewCenter>
      ) : (
        <ViewCenter style={style.arrowIconWrapper}>
          <RightAngleIcon color={COLORS.black} />
        </ViewCenter>
      )}
    </ViewRow>
  );
};

export default StockCard;
