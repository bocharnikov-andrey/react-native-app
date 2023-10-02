import { NemeCategory } from "./nemes";
import { StockCategory } from "./stocks";

export type FilterItemList = NemeFilters | StockFilters;

export type FilterItem = NemeCategory | StockCategory;

export type NemeFilters = NemeCategory[];

export type StockFilters = StockCategory[];
