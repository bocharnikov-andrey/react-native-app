import { FC, ReactNode } from "react";
import { StyleProp, StyleSheet, Text, TextProps, TextStyle } from "react-native";
import { COLORS } from "../../constants/colors";
import { FONTS } from "../../constants/fonts";

export type Props = TextProps & {
  textColor?: string;
  fontSize?: number;
  fontWeight?: number;
  italicText?: boolean;
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
    <Text {...props} style={[weightedFontFamily, { ...passedStyles }]}>
      {props.children}
    </Text>
  );
};

const styles = ({ fontSize, textColor, italicText }: Omit<Props, "text">) =>
  StyleSheet.create({
    regular: {
      fontFamily: FONTS.regular,
      fontSize: fontSize || 14,
      fontWeight: "400",
      color: textColor || COLORS.white,
      fontStyle: italicText ? "italic" : "normal",
    },
    medium: {
      fontFamily: FONTS.medium,
      fontSize: fontSize || 14,
      fontWeight: "500",
      color: textColor || COLORS.white,
      fontStyle: italicText ? "italic" : "normal",
    },
    bold: {
      fontFamily: FONTS.bold,
      fontSize: fontSize || 14,
      fontWeight: "700",
      color: textColor || COLORS.white,
      fontStyle: italicText ? "italic" : "normal",
    },
  });

export default PrimaryText;
