import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

const TopBar: FC = () => {
  return (
    <View style={styles.topBar}>
      <View>
        <Text>TopBar</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topBar: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
  },
});

export default TopBar;
