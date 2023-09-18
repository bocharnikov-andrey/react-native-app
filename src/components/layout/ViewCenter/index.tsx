import { FC, ReactNode } from "react";
import { StyleSheet, View, TextStyle, ViewProps } from "react-native";

type Props = ViewProps & {
  children: ReactNode;
  isRow?: boolean;
  style?: TextStyle | TextStyle[];
};

const ViewCenter: FC<Props> = (props) => {
  const textStyle = styles({ ...props });
  const passedStyles = Array.isArray(props.style) ? Object.assign({}, ...props.style) : props.style;

  return (
    <View {...props} style={[textStyle.container, { ...passedStyles }]}>
      {props.children}
    </View>
  );
};

const styles = ({ isRow }: Props) =>
  StyleSheet.create({
    container: {
      flexDirection: isRow ? "row" : "column",
      justifyContent: "center",
      alignItems: "center",
    },
  });

export default ViewCenter;
