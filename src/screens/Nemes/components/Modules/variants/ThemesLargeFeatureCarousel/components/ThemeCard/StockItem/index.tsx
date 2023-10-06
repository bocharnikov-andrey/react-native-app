import { FC } from "react";
import { View, TouchableHighlight } from "react-native";
import ViewCenter from "components/layout/ViewCenter";
import PrimaryText from "components/PrimaryText";
import StockRow from "components/Stocks/StockRow";
import { StockSymbolLight } from "types/symbol";
import { COLORS } from "constants/colors";
import { styles } from "./styles";

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
    <TouchableHighlight
      style={styles.stockTouch}
      underlayColor={COLORS.blackOpacity_20}
      onPress={handleStockClick}
    >
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

export default StockItem;
