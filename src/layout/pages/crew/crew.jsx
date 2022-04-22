import { usePageContext } from "../../../custom-hooks/use-page-context";
import { usePageData } from "../../../custom-hooks/use-page-data";
import CrewInfoDisplay from "../../components/crew-info-display/crew-info-display";
import ImageFrame from "../../components/image-frame/image-frame";
import PageTitle from "../../components/page-title/page-title";
import StateSelection from "../../components/state-selection/state-selection";
import "./crew.scss";

const crewItems = [
  { value: "Douglas Hurley" },
  { value: "Mark Shuttleworth" },
  { value: "Victor Glover" },
  { value: "Anousheh Ansari" },
];

const Crew = () => {
  usePageContext("Crew");

  const { activeTab, activeTabInfo, setActiveTab } = usePageData("crew");

  const handleChange = (e) => {
    setActiveTab(e.target.value);
  };

  return (
    <main className='crew'>
      <PageTitle number='02' title='MEET YOUR CREW' />

      <div className='column-1'>
        <ImageFrame extraClass='crew-img' {...activeTabInfo} />
      </div>

      <div className='column-2'>
        <StateSelection
          items={crewItems}
          fieldName='crew'
          active={activeTab}
          handleChange={handleChange}
          extraClass='select-options'
          itemExtraClass='option'
        />

        <CrewInfoDisplay {...activeTabInfo} />
      </div>
    </main>
  );
};

export default Crew;
