import { ReactNode } from "react";
import { ModuleWithThemes } from "types/module";

export type ModuleContextValue = {
  module: ModuleWithThemes;
};

export type ModuleProviderProps = {
  children: ReactNode;
  value: ModuleContextValue;
};
