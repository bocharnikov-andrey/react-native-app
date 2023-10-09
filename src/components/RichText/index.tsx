import { FC } from "react";
import { Text, View, StyleSheet, useWindowDimensions } from "react-native";
import RenderHtml, { MixedStyleDeclaration, MixedStyleRecord } from "react-native-render-html";
import { COLORS } from "../../constants/colors";

type Props = {
  content: string;
  contentBackgroundColor?: "light" | "dark";
  baseStyle?: MixedStyleDeclaration;
};

const RichText: FC<Props> = ({ content, contentBackgroundColor, baseStyle }) => {
  const {width} = useWindowDimensions();
  const baseStyleOverride = {
    ...baseStyleCommon,
    ...(baseStyle ?? {})
  };

  return (
    <RenderHtml
      source={{html: content}}
      baseStyle={baseStyleOverride}
      contentWidth={width}
      tagsStyles={tagsStyles({ contentBackgroundColor })}
    />
  );
};

const baseStyleCommon: MixedStyleDeclaration = {
  color: COLORS.white,
  fontSize: 16,
  fontWeight: "400",
  lineHeight: 22.4,
};

type TagsStylesProps = {
  contentBackgroundColor?: "light" | "dark";
};

const tagsStyles = ({ contentBackgroundColor }: TagsStylesProps): MixedStyleRecord => ({
  ol: {
    paddingLeft: 20,
  },
  p: {
    margin: 0,
  },
  span: {
    margin: 0,
  },
  img: {
    maxWidth: "100%",
  },
  ul: {
    display: "flex",
    flexDirection: "column",
    // gap: 24,
  },
  a: {
    color: contentBackgroundColor === "light" ? COLORS.lightBlue : COLORS.springGreen,
    textDecorationColor: contentBackgroundColor === "light" ? COLORS.lightBlue : COLORS.springGreen
  },
});

export default RichText;
