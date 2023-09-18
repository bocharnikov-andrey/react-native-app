import { useEffect, useState } from "react";

export const useSearch = (callback: (value: string) => void) => {
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    callback(searchValue);
  }, [searchValue]);

  return { searchValue, setSearchValue };
};
