import { FC } from "react";
import { View, StyleSheet, TouchableHighlight } from "react-native";
import ViewCenter from "../../../../../../../../../../../../components/layout/ViewCenter";
import PrimaryText from "../../../../../../../../../../../../components/PrimaryText";
import { StockSymbolLight } from "../../../../../../../../../../../../types/symbol";
import StockRow from "../../../../../../../../../../../../components/Stocks/StockRow";
import { COLORS } from "../../../../../../../../../../../../constants/colors";

type Props = {
  idx: number;
  symbol: StockSymbolLight;
  onPress?: (symbol: StockSymbolLight) => void;
};

const StockItem: FC<Props> = ({ idx, symbol, onPress }) => {
  const handleStockClick = () => {
    onPress?.(symbol);
  };

  return (
    <TouchableHighlight onPress={handleStockClick}>
      <View style={styles.stockItem}>
        <ViewCenter style={styles.stockItemIndex}>
          <PrimaryText
            fontWeight={500}
            fontSize={14}
          >
            { idx + 1 }
          </PrimaryText>
        </ViewCenter>
        <StockRow stock={symbol}/>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  stockItem: {
    position: "relative",
    paddingVertical: 8,
    paddingRight: 8,
    paddingLeft: 36,
    borderRadius: 4,
    backgroundColor: COLORS.whiteOpacity_10,
    overflow: "hidden",

    //   box-shadow: inset 0 0 0 1px ${COLOR_WHITE_20};
    //   backdrop-filter: blur(6px);
  },
  stockItemIndex: {
    position: "absolute",
    backgroundColor: COLORS.lightBlue,
    top: -1,
    bottom: -1,
    left: 0,
    width: 28,
  },
});

export default StockItem;
