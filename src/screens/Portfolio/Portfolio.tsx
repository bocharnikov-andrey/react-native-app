import { StyleSheet, View, Text } from "react-native";

const Portfolio = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "#fff" }}>Portfolio</Text>
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

export default Portfolio;
