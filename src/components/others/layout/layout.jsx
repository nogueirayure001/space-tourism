import { Outlet } from "react-router-dom";
import Header from "../header/header";
import "./layout.scss";

const Layout = (props) => {
  return (
    <div className='layout'>
      <Header {...props} />

      <div className='content'>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
