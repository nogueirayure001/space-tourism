import { useEffect, useContext, useState } from "react";
import { PageContext, DataContext } from "../../../contexts";
import DestinationInfoDisplay from "../../components/destination-info-display/destination-info-display";
import ImageFrame from "../../components/image-frame/image-frame";
import PageTitle from "../../components/page-title/page-title";
import StateSelection from "../../components/state-selection/state-selection";
import "./destination.scss";

const destinationItems = [
  { value: "Moon" },
  { value: "Mars" },
  { value: "Europa" },
  { value: "Titan" },
];

const Destination = () => {
  const page = useContext(PageContext);
  useEffect(() => page.setPageName("Destination"), []);

  const pageData = useContext(DataContext);
  const destinations = pageData.destinations;

  const [activeDest, setActiveDest] = useState(destinations[0].name || null);

  const [activeDestInfo] = destinations.filter(
    (destination) => destination.name === activeDest
  );

  const handleChange = (e) => {
    setActiveDest(e.target.value);
  };

  return (
    <main className='destination'>
      <PageTitle number='01' title='PICK YOUR DESTINATION' />

      <div className='column-1'>
        <ImageFrame extraClass='destination-img' {...activeDestInfo} />
      </div>

      <div className='column-2'>
        <StateSelection
          items={destinationItems}
          fieldName='destination'
          active={activeDest}
          handleChange={handleChange}
          extraClass='select-options'
          itemExtraClass='option'
        />

        <DestinationInfoDisplay {...activeDestInfo} />
      </div>
    </main>
  );
};

export default Destination;
