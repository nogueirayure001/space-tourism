import { useEffect, useContext } from "react";
import { PageContext } from "../../../contexts";
import "./destination.scss";

const Destination = ({ setActivePage }) => {
  const page = useContext(PageContext);
  useEffect(() => page.setPageName("Destination"), []);

  return (
    <main className='destination'>
      <h1>Destination</h1>
    </main>
  );
};

export default Destination;
