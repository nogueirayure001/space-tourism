import { PageProvider } from "../contexts/page-context";
import { DataProvider } from "../contexts/data-context";
import { Outlet } from "react-router-dom";
import Header from "./components/header/header";
import "./layout.scss";

const Layout = () => {
  return (
    <PageProvider>
      <div className='layout'>
        <Header />

        <div className='content'>
          <DataProvider>
            <Outlet />
          </DataProvider>
        </div>
      </div>
    </PageProvider>
  );
};

export default Layout;
