import { FC } from "react";
import { View, TouchableOpacity } from "react-native";
import ViewCenter from "components/layout/ViewCenter";
import PrimaryText from "components/PrimaryText";
import StockRow from "components/Stocks/StockRow";
import { StockSymbolLight } from "types/symbol";
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
    <TouchableOpacity
      activeOpacity={0.7}
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
    </TouchableOpacity>
  );
};

export default StockItem;
