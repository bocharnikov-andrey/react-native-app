import { FC } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { StockSymbolLight } from "types/symbol";
import { styles } from "./styles";
import ViewRow from "../../layout/ViewRow";
import StockLogo from "../../StockTypes/components/StockLogo";
import StockLabel from "../components/Label";
import StockPrice from "../components/Price";
import StockDeltaPrice from "../components/DeltaPrice";

type Props = {
  stock: StockSymbolLight;
  moduleName: string;
  moduleRank: number;
};

const StockCard: FC<Props> = ({ stock, moduleName, moduleRank }) => {
  const handleStockClick = () => {
    console.log("Stock click", stock.id);
  };

  return (
    <TouchableOpacity onPress={handleStockClick}>
      <ViewRow style={styles.container} jc="space-between">
        <View style={styles.leftColumn}>
          <StockLogo src={stock.picture} size={40}/>
          <StockLabel label={stock.label}/>
          <StockPrice price={stock.price}/>
          <StockDeltaPrice deltaPrice={stock.lastDayPriceDeltaPercent}/>
        </View>
        <Image
          style={{ width: 20, height: 20 }}
          source={require("../../../../assets/images/favicon.png")}
        />
      </ViewRow>
    </TouchableOpacity>
  );
};

export default StockCard;
