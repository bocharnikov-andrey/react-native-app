import { FC, ReactNode } from "react";
import { FlexStyle, StyleSheet, TextStyle, View, ViewProps } from "react-native";

type Props = ViewProps & {
  children: ReactNode;
  ai?: FlexStyle["alignItems"];
  jc?: FlexStyle["justifyContent"];
  style?: TextStyle | TextStyle[];
  isRow?: boolean;
};

const RowDirectionView: FC<Props> = (props) => {
  const textStyle = styles({ ...props });
  const passedStyles = Array.isArray(props.style) ? Object.assign({}, ...props.style) : props.style;

  return (
    <View style={[textStyle.container, { ...passedStyles }]} {...props}>
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

export default RowDirectionView;
