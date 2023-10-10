import { FC } from "react";
import { View } from "react-native";
import ModuleItem from "./components/ModuleItem";
import { mockStore } from "../../_mockStore";

type Props = {};

const Modules: FC<Props> = () => {
  const { module } = mockStore;
  const modules = [module];

  return (
    <View>
      {modules.map((moduleItem) => (
        <ModuleItem
          key={moduleItem.id}
          module={module}
          rank={1}
        />
      ))}
    </View>
  );
};

export default Modules;
