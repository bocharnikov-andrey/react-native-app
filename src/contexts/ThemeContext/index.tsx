import { createContext, FC, useContext, useMemo, useState } from "react";
import { ColorSchems, ColorScheme, ThemesProviderProps } from "./types";

export const ColorSchemeContext = createContext<ColorScheme | null>(null);

export const useColorScheme = () => {
  const context = useContext(ColorSchemeContext);

  if (context === null) {
    throw new Error("Wrap your component with ThemesProvider to use ColorScheme context");
  }

  return context;
};

const ColorSchemeProvider: FC<ThemesProviderProps> = ({ children }) => {
  const [theme, toggleTheme] = useState<ColorSchems>("dark");

  const changeTheme = (themeName: ColorSchems) => {
    toggleTheme(themeName);
  };

  const value = useMemo(() => ({ theme, changeTheme }), [theme, changeTheme]);

  return <ColorSchemeContext.Provider value={value}>{children}</ColorSchemeContext.Provider>;
};

export default ColorSchemeProvider;
