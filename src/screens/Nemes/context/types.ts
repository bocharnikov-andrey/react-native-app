import { Dispatch, ReactNode, SetStateAction } from "react";

export type NemesContextType = {
  filter: string;
  setFilter: Dispatch<SetStateAction<any>>;
  getFilteredNemes: (value: string) => void;
};

export type NemesProviderProps = {
  children: ReactNode;
};
