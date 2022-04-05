import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/home";
import Destination from "./components/pages/destination/destination";
import Layout from "./components/others/layout/layout";
import "./app-routes.css";

function AppRoutes() {
  const [activePage, setActivePage] = useState(null);

  return (
    <Routes>
      <Route path='/' element={<Layout activePage={activePage} />}>
        <Route index element={<Home setActivePage={setActivePage} />} />
        <Route
          path='destination'
          element={<Destination setActivePage={setActivePage} />}
        />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
