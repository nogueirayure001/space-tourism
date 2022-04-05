import { useEffect } from "react";
import "./home.scss";

const Home = ({ setActivePage }) => {
  useEffect(() => setActivePage("Home"), []);

  return (
    <main className='home'>
      <h1>Home</h1>
    </main>
  );
};

export default Home;
