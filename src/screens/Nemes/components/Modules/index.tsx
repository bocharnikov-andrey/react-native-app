import { FC } from "react";
import { View, Text } from "react-native";
import ModuleItem from "./components/ModuleItem";
import { mockStore } from "../../_mockStore";

type Props = {};

const Modules: FC<Props> = () => {
  const { module } = mockStore;

  return (
    <View>
      <ModuleItem module={module} rank={1}/>
    </View>
  );
};

export default Modules;
