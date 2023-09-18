import { ReactNode } from "react";
import { StockItem } from "../../../types/stocks";

export type StocksPageContextType = {
  stocks: StockItem[] | null;
};

export type StocksPageProviderProps = {
  children: ReactNode;
};
