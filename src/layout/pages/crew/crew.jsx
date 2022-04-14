import { useEffect, useContext, useState } from "react";
import { PageContext, DataContext } from "../../../contexts";
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
  const page = useContext(PageContext);
  useEffect(() => page.setPageName("Crew"), []);

  const pageData = useContext(DataContext);
  const crew = pageData.crew;

  const [activeCrew, setActiveCrew] = useState(crew[0].name || null);

  const [activeCrewInfo] = crew.filter(
    (crewMember) => crewMember.name === activeCrew
  );

  const handleChange = (e) => {
    setActiveCrew(e.target.value);
  };

  return (
    <main className='crew'>
      <PageTitle number='02' title='MEET YOUR CREW' />

      <div className='column-1'>
        <ImageFrame extraClass='crew-img' {...activeCrewInfo} />
      </div>

      <div className='column-2'>
        <StateSelection
          items={crewItems}
          fieldName='crew'
          active={activeCrew}
          handleChange={handleChange}
          extraClass='select-options'
          itemExtraClass='option'
        />

        <CrewInfoDisplay {...activeCrewInfo} />
      </div>
    </main>
  );
};

export default Crew;
