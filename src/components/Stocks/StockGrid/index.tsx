import { FC } from "react";
import { View, StyleSheet, ViewProps, TouchableOpacity } from "react-native";
import { StockSymbolLight } from "../../../types/symbol";
import { COLORS } from "../../../constants/colors";
import StockLogo from "../../StockTypes/components/StockLogo";
import StockLabel from "../components/Label";
import StockDeltaPrice from "../components/DeltaPrice";
import StockPrice from "../components/Price";

type Props = ViewProps & {
  stock: StockSymbolLight;
  moduleName: string;
  moduleRank: number;
};

const StockGrid: FC<Props> = ({ stock, moduleName, moduleRank, style, ...viewProps }) => {
  // const goToStockDetails = () => {
  //     mParticleEventTracker("module_interaction", {
  //       module_name: props.moduleName,
  //       module_display_name: props.moduleName,
  //       module_rank: props.moduleRank,
  //       interaction: "instrument_click",
  //     });
  //     mParticleSetModuleDataToUserAttributes(props.moduleName, props.moduleRank);
  //     navigate(getStockPath(stock.id));
  //   };

  const handleStockClick = () => {
    console.log("Stock click handled");
  };

  return (
    <TouchableOpacity onPress={handleStockClick}>
      <View {...viewProps} style={[styles.container, style]}>
        <StockLogo src={stock.picture} size={32}/>
        <StockLabel label={stock.name} />
        <View>
          <StockDeltaPrice
            deltaPrice={stock.lastDayPriceDeltaPercent || 0}
          />
          <StockPrice price={stock.price} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: COLORS.blackOpacity_70,
    padding: 16,
    borderRadius: 12,
    gap: 8,
    textAlign: "center",
  },
});

export default StockGrid;
