import { FC } from "react";
import { Text } from "react-native";
import PageContainer from "components/layout/PageContainer";
import { ModuleTypes, ModuleWithThemes } from "types/module";
import TopBar from "./components/TopBar";
import Nemes from "./moduleTypes/Nemes";
import { styles } from "./styles";
import { nemeModule } from "./_mockStore/module";

const moduleTypesComponents: Record<
  ModuleTypes,
  FC<{module: ModuleWithThemes}>
> = {
  [ModuleTypes.nemeModule]: Nemes,
  [ModuleTypes.marketModule]: () => null,
  [ModuleTypes.notificationsModule]: () => null,
};

const ModuleScreen: FC = () => {
  const isLoading = false;
  const module: ModuleWithThemes = nemeModule;

  const ContentComponent = moduleTypesComponents[module.type];

  return (
    <PageContainer
      hideFooter
      style={styles.container}
      stickyHeaderIndices={[0]}
    >
      <TopBar isLoading={isLoading} moduleName={module.name}/>
      {isLoading && <Text>Loading skeleton...</Text>}
      {!isLoading && <ContentComponent module={module}/>}
    </PageContainer>
  );
};

export default ModuleScreen;
