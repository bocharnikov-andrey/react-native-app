import { FC } from "react";
import { StyleSheet, View, Text } from "react-native";

const Stocks: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "#fff" }}>Stocks</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Stocks;
