import React, { createContext, FC, useContext, useEffect, useMemo, useState } from "react";
import { StocksPageContextType, StocksPageProviderProps } from "./types";
import { StockItem } from "../../../types/stocks";
import { STOCKS } from "../helpers";

const StocksPageContext = createContext<StocksPageContextType | null>(null);

export const useStocksPage = () => {
  const context = useContext(StocksPageContext);

  if (context === null) {
    throw new Error("Wrap your component with NemesProvider to use Nemes context");
  }

  return context;
};

const StocksPageProvider: FC<StocksPageProviderProps> = ({ children }) => {
  const [stocks, setStocks] = useState<StockItem[] | null>(null);

  useEffect(() => {
    setStocks(STOCKS);
  }, []);

  const value = useMemo(() => ({ stocks }), [stocks]);

  return <StocksPageContext.Provider value={value}>{children}</StocksPageContext.Provider>;
};

export default StocksPageProvider;
