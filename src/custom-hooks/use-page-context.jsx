import { useContext, useEffect } from "react";
import { PageContext } from "../contexts/page-context";

export const usePageContext = (currentPage) => {
  const { setPageName } = useContext(PageContext);
  useEffect(() => setPageName(currentPage), [currentPage, setPageName]);
};
