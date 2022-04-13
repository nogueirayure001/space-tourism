import { useState } from "react";
import { PageContext, DataContext } from "../contexts";
import { Outlet } from "react-router-dom";
import Header from "./components/header/header";
import data from "../data.json";
import "./layout.scss";

const Layout = () => {
  const [activePage, setActivePage] = useState(null);
  const context = {
    name: activePage,
    setPageName: setActivePage,
  };

  return (
    <PageContext.Provider value={context}>
      <div className='layout'>
        <Header />

        <DataContext.Provider value={data}>
          <div className='content'>
            <Outlet />
          </div>
        </DataContext.Provider>
      </div>
    </PageContext.Provider>
  );
};

export default Layout;
