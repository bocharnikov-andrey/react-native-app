import { FC } from "react";
import { View, Text } from "react-native";
import ModuleItem from "./components/ModuleItem";

type Props = {};

const Modules: FC<Props> = () => {
  return (
    <View>
      <Text>Modules component</Text>
      <ModuleItem/>
    </View>
  );
};

export default Modules;
