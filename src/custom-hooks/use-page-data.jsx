import { useContext, useState } from "react";
import { DataContext } from "../contexts/data-context";

export const usePageData = (page) => {
  const pagesData = useContext(DataContext);

  const [activePageData, firstActiveTabName] = [
    pagesData[page],
    pagesData[page][0].name,
  ];

  const [activeTab, setActiveTab] = useState(firstActiveTabName || null);

  const [activeTabInfo] = activePageData.filter(
    (tab) => tab.name === activeTab
  );

  return { activeTab, activeTabInfo, setActiveTab };
};
