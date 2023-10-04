import { FC } from "react";
import { Text, View, StyleSheet, StyleProp, ViewStyle, TouchableOpacity } from "react-native";
import { StockSymbolLight } from "../../../types/symbol";
import { COLORS } from "../../../constants/colors";

type Props = {
  stock: StockSymbolLight;
  style?: StyleProp<ViewStyle>;
  moduleName: string;
  moduleRank: number;
};

const StockGrid: FC<Props> = ({ style }) => {
  const handleStockClick = () => {
    console.log("Stock click handled");
  };

  return (
    <TouchableOpacity onPress={handleStockClick}>
      <View style={[styles.container, style]}>
        <Text>StockGrid component</Text>
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
