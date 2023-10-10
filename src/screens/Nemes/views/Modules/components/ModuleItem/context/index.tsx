import { FC, createContext, useContext } from "react";
import { ModuleContextValue, ModuleProviderProps } from "./types";

const ModuleContext = createContext<ModuleContextValue | null>(null);

export const useModule = () => {
  const context = useContext(ModuleContext);

  if (context === null) {
    throw new Error(
      "Seems you forgot to wrap your component with `ModuleProvider`"
    );
  }

  return context;
};

const ModuleProvider: FC<ModuleProviderProps> = (props) => {
  const { children, value } = props;

  return (
    <ModuleContext.Provider value={value}>{children}</ModuleContext.Provider>
  );
};

export default ModuleProvider;
