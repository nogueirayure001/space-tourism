import { createContext } from "react";

export const PageContext = createContext({
  name: null,
  setPageName: () => {},
});

export const DataContext = createContext({ data: null });
