import { FC } from "react";
import { ScrollView } from "react-native";
import take from "lodash.take";
import { ModuleLayoutTypes } from "types/module";
import StockCard from "components/Stocks/StockCard";
import { mockStore } from "../../../../../../_mockStore";
import { styles } from "./styles";

type Props = {
  moduleRank: number;
};

const MarketsLayout: FC<Props> = ({ moduleRank }) => {
  const { module } = mockStore;
  const visibleStocks = take(module.markets, 10);

  if (module.layout === ModuleLayoutTypes.SMALL_TILES) {
    return (
      <ScrollView
        horizontal
        contentContainerStyle={styles.container}
      >
        {visibleStocks.map((market) => (
          <StockCard
            key={market.id}
            stock={market}
            moduleName={module.name}
            moduleRank={moduleRank}
          />
        ))}
      </ScrollView>
    );
  }

  return null;
};

export default MarketsLayout;
