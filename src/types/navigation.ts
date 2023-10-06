import { FC } from "react";

export type RootStackParamList = {
  Portfolio: undefined;
  Nemes: {
    filter: string;
  };
  Stocks: undefined;
  Module: undefined;
};

export type NavigationPath = {
  id: number;
  name: keyof RootStackParamList;
  component: FC;
};
