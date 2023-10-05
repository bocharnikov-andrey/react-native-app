import { FC } from "react";
import { Text, View, StyleSheet } from "react-native";
import { StockSymbolLight } from "../../../types/symbol";
import ViewCenter from "../../layout/ViewCenter";
import ViewRow from "../../layout/ViewRow";
import StockLogo from "../../StockTypes/components/StockLogo";
import StockLabel from "../components/Label";
import StockPrice from "../components/Price";
import StockDeltaPrice from "../components/DeltaPrice";

type Props = {
  stock: StockSymbolLight;
};

const StockRow: FC<Props> = ({ stock }) => {
  return (
    <ViewRow jc="space-between" ai="center" style={styles.container}>
      <ViewRow jc="flex-start" style={styles.labelContainer}>
        <StockLogo src={stock.picture} size={32}/>
        <StockLabel label={stock.label} style={styles.stockLabel}/>
      </ViewRow>
      <ViewRow style={styles.priceContainer}>
        <StockPrice price={stock.price}/>
        <StockDeltaPrice deltaPrice={stock.lastDayPriceDeltaPercent}/>
      </ViewRow>
    </ViewRow>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
  labelContainer: {
    width: "45%",
    gap: 8,
  },
  stockLabel: {
    width: "70%",
  },
  priceContainer: {
    width: "50%",
    gap: 8,
  },
});

export default StockRow;
