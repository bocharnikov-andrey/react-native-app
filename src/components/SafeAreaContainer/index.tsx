import { FC, ReactNode } from "react";
import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";

type Props = {
  children: ReactNode;
};

const SafeAreaContainer: FC<Props> = ({ children }) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight,
  },
});

export default SafeAreaContainer;
