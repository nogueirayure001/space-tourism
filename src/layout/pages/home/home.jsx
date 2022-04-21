import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PageContext } from "../../../contexts/page-context";
import Button from "../../components/button/button";
import "./home.scss";

const Home = () => {
  const page = useContext(PageContext);
  useEffect(() => page.setPageName("Home"), [page]);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/destination");
  };

  return (
    <main className='home'>
      <div className='text'>
        <h1 className='title'>
          <div className='title--little'>SO, YOU WANT TO TRAVEL TO</div>
          <div className='title--big'>SPACE</div>
        </h1>

        <p className='paragraph'>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <Button extraClass='explore-btn' handleClick={handleClick}>
        EXPLORE
      </Button>
    </main>
  );
};

export default Home;
