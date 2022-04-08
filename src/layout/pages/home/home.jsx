import { useEffect, useContext } from "react";
import { PageContext } from "../../../contexts";
import "./home.scss";

const Home = () => {
  const page = useContext(PageContext);
  useEffect(() => page.setPageName("Home"), []);

  return (
    <main className='home'>
      <h1>Home</h1>
    </main>
  );
};

export default Home;
