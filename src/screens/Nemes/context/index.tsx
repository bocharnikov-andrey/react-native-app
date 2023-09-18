import React, { createContext, FC, useContext, useMemo, useState } from "react";
import { NemesContextType, NemesProviderProps } from "./types";
import { NemeCategory } from "../../../types/nemes";

const NemesContext = createContext<NemesContextType | null>(null);

export const useNemesPage = () => {
  const context = useContext(NemesContext);

  if (context === null) {
    throw new Error("Wrap your component with NemesProvider to use Nemes context");
  }

  return context;
};

const NemesProvider: FC<NemesProviderProps> = ({ children }) => {
  const [filter, setFilter] = useState<NemeCategory>("All");

  // const getFilteredNemes = (value: string) => {
  const getFilteredNemes = (value: string) => {
    // fetch nemes from server
    return value;
  };

  const value = useMemo(
    () => ({ filter, setFilter, getFilteredNemes }),
    [filter, setFilter, getFilteredNemes]
  );

  return <NemesContext.Provider value={value}>{children}</NemesContext.Provider>;
};

export default NemesProvider;
