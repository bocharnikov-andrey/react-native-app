import { StockItem } from "./stocks";

export type Neme = {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  picture: string;
  category: NemeCategory;
  stocks: StockItem[];
};

export type NemeCategory =
  | "All"
  | "For you"
  | "Trending"
  | "Financial"
  | "Analysis"
  | "Industries"
  | "ETFs"
  | "Around the world"
  | "Social media";
