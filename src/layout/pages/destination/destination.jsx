import { usePageContext } from "../../../custom-hooks/use-page-context";
import { usePageData } from "../../../custom-hooks/use-page-data";
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
  usePageContext("Destination");

  const { activeTab, activeTabInfo, setActiveTab } =
    usePageData("destinations");

  const handleChange = (e) => {
    setActiveTab(e.target.value);
  };

  return (
    <main className='destination'>
      <PageTitle number='01' title='PICK YOUR DESTINATION' />

      <div className='column-1'>
        <ImageFrame extraClass='destination-img' {...activeTabInfo} />
      </div>

      <div className='column-2'>
        <StateSelection
          items={destinationItems}
          fieldName='destination'
          active={activeTab}
          handleChange={handleChange}
          extraClass='select-options'
          itemExtraClass='option'
        />

        <DestinationInfoDisplay {...activeTabInfo} />
      </div>
    </main>
  );
};

export default Destination;
