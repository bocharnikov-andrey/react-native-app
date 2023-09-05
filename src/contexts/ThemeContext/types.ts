import { ReactNode } from "react";

export type ColorScheme = {
  theme: ColorSchems;
  changeTheme: (colorScheme: ColorSchems) => void;
};

export type ThemesProviderProps = {
  children: ReactNode;
};

export type ColorSchems = "light" | "dark";
