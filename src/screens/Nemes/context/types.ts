import { Dispatch, ReactNode, SetStateAction } from "react";
import { FilterItem } from "../../../types/filters";

export type NemesContextType = {
  filter: FilterItem;
  setFilter: Dispatch<SetStateAction<FilterItem>>;
  getFilteredNemes: (value: string) => void;
};

export type NemesProviderProps = {
  children: ReactNode;
};
