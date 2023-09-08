import { FC, ReactNode } from "react";
import { StyleProp, StyleSheet, Text, TextProps, TextStyle } from "react-native";
import { COLORS } from "../../../constants/colors";
import { FONTS } from "../../../constants/fonts";

type Props = TextProps & {
  textColor?: string;
  fontSize?: number;
  fontWeight?: number;
  style?: TextStyle | TextStyle[];
  children: ReactNode;
};

const PrimaryText: FC<Props> = (props) => {
  const textStyle = styles({ ...props });
  const passedStyles = Array.isArray(props.style) ? Object.assign({}, ...props.style) : props.style;

  let weightedFontFamily: StyleProp<TextStyle> | undefined;

  switch (props.fontWeight) {
    case 400:
      weightedFontFamily = textStyle.regular;
      break;
    case 500:
      weightedFontFamily = textStyle.medium;
      break;
    case 700:
      weightedFontFamily = textStyle.bold;
      break;
    default:
      weightedFontFamily = textStyle.regular;
  }

  return (
    <Text style={[weightedFontFamily, { ...passedStyles }]} {...props}>
      {props.children}
    </Text>
  );
};

const styles = ({ fontSize, textColor }: Omit<Props, "text">) =>
  StyleSheet.create({
    regular: {
      fontFamily: FONTS.regular,
      fontSize: fontSize || 14,
      color: textColor || COLORS.white,
    },
    medium: {
      fontFamily: FONTS.medium,
      fontSize: fontSize || 14,
      color: textColor || COLORS.white,
    },
    bold: {
      fontFamily: FONTS.bold,
      fontSize: fontSize || 14,
      color: textColor || COLORS.white,
    },
  });

export default PrimaryText;
