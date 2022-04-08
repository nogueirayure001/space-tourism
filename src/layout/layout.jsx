import { useState } from "react";
import { PageContext } from "../contexts";
import { Outlet } from "react-router-dom";
import Header from "./components/header/header";
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

        <div className='content'>
          <Outlet />
        </div>
      </div>
    </PageContext.Provider>
  );
};

export default Layout;
