import { StyleSheet, View, Text } from "react-native";

const Nemes = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "#fff" }}>Nemes</Text>
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

export default Nemes;
