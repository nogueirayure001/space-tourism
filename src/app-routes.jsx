import { Routes, Route } from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./layout/pages/home/home";
import Destination from "./layout/pages/destination/destination";

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='destination' element={<Destination />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
