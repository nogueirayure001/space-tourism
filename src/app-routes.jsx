import { Routes, Route } from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./layout/pages/home/home";
import Destination from "./layout/pages/destination/destination";
import Crew from "./layout/pages/crew/crew";
import Technology from "./layout/pages/technology/technology";

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='destination' element={<Destination />} />
        <Route path='crew' element={<Crew />} />
        <Route path='technology' element={<Technology />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
