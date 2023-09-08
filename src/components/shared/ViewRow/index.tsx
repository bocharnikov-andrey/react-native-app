import { FC, ReactNode } from "react";
import { FlexStyle, StyleSheet, TextStyle, View, ViewProps } from "react-native";

type Props = ViewProps & {
  children: ReactNode;
  jc?: FlexStyle["justifyContent"];
  ai?: FlexStyle["alignItems"];
  style?: TextStyle | TextStyle[];
};

const ViewRow: FC<Props> = (props) => {
  const textStyle = styles({ ...props });
  const passedStyles = Array.isArray(props.style) ? Object.assign({}, ...props.style) : props.style;

  return (
    <View {...props} style={[{ ...passedStyles }, textStyle.container]}>
      {props.children}
    </View>
  );
};

const styles = ({ ai, jc }: Props) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: jc || "space-between",
      alignItems: ai || "center",
    },
  });

export default ViewRow;
