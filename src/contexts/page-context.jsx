import { createContext, useState } from "react";

export const PageContext = createContext({
  name: null,
  setPageName: () => {},
});

export const PageProvider = ({ children }) => {
  const [activePage, setActivePage] = useState(null);
  const value = {
    name: activePage,
    setPageName: setActivePage,
  };

  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};
