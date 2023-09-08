import { FC, ReactNode } from "react";
import { StyleSheet, Text, TextProps, TextStyle } from "react-native";

type Props = TextProps & {
  children: ReactNode;
  style?: TextStyle | TextStyle[];
  isRow?: boolean;
};

const CenterView: FC<Props> = (props) => {
  const textStyle = styles({ ...props });
  const passedStyles = Array.isArray(props.style) ? Object.assign({}, ...props.style) : props.style;

  return (
    <Text style={[textStyle.container, { ...passedStyles }]} {...props}>
      {props.children}
    </Text>
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

export default CenterView;
