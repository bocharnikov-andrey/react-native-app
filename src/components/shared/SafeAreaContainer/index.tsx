import { FC, ReactNode } from "react";
import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { SafeAreaViewProps } from "react-native-safe-area-context";

type Props = SafeAreaViewProps & {
  children: ReactNode;
};

const SafeAreaContainer: FC<Props> = (props) => {
  const passedStyles = Array.isArray(props.style) ? Object.assign({}, ...props.style) : props.style;

  return (
    <SafeAreaView style={[styles.container, { ...passedStyles }]} {...props}>
      {props.children}
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight,
  },
});

export default SafeAreaContainer;
