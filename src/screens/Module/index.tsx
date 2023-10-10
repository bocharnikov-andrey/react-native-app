import { FC } from "react";
import { Text } from "react-native";
import PageContainer from "components/layout/PageContainer";
import { ModuleTypes, ModuleWithThemes } from "types/module";
import TopBar from "./components/TopBar";
import Nemes from "./moduleTypes/Nemes";
import Stocks from "./moduleTypes/Stocks";
import { styles } from "./styles";
import { marketModule, nemeModule } from "./_mockStore/module";

const moduleTypesComponents: Record<
  ModuleTypes,
  FC<{module: ModuleWithThemes}>
> = {
  [ModuleTypes.nemeModule]: Nemes,
  [ModuleTypes.marketModule]: Stocks,
  [ModuleTypes.notificationsModule]: () => null,
};

const ModuleScreen: FC = () => {
  const isLoading = false;
  const module: ModuleWithThemes = nemeModule;
  // const module: ModuleWithThemes = marketModule;

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
