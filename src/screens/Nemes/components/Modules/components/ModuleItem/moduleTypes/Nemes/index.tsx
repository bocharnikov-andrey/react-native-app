import { FC, ReactNode } from "react";
import { StyleProp, StyleSheet, Text, TextProps, TextStyle } from "react-native";
import { ModuleWithThemes } from "../../../../../../../../types/module";

type Props = {};

const NemesLayout: FC<Props> = () => {
  const module: ModuleWithThemes = {} as any;
  console.log(module);

  return <Text>123</Text>
};

export default NemesLayout;
