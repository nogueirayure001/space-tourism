import { useEffect } from "react";
import "./destination.scss";

const Destination = ({ setActivePage }) => {
  useEffect(() => setActivePage("Destination"));

  return (
    <main className='destination'>
      <h1>Destination</h1>
    </main>
  );
};

export default Destination;
