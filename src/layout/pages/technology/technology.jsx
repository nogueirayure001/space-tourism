import { useEffect, useContext, useState } from "react";
import { DataContext } from "../../../contexts/data-context";
import { PageContext } from "../../../contexts/page-context";
import ImageFrame from "../../components/image-frame/image-frame";
import PageTitle from "../../components/page-title/page-title";
import StateSelection from "../../components/state-selection/state-selection";
import TechInfoDisplay from "../../components/technology-info-display/technology-info-display";
import "./technology.scss";

const techItems = [
  { value: "Launch vehicle", displayName: "1" },
  { value: "Spaceport", displayName: "2" },
  { value: "Space capsule", displayName: "3" },
];

const Technology = () => {
  const page = useContext(PageContext);
  useEffect(() => page.setPageName("Technology"), [page]);

  const pageData = useContext(DataContext);
  const tech = pageData.technology;

  const [activeTech, setActiveTech] = useState(tech[0].name || null);

  const [isDesktopSize, setIsDesktopSize] = useState(window.innerWidth >= 1200);
  useEffect(() => {
    window.addEventListener("resize", () =>
      setIsDesktopSize(window.innerWidth >= 1200)
    );

    return () =>
      window.removeEventListener("resize", () =>
        setIsDesktopSize(window.innerWidth >= 1200)
      );
  }, []);

  const [activeTechInfo] = tech.filter(
    (techItem) => techItem.name === activeTech
  );

  const images = {
    jpg: activeTechInfo.images[isDesktopSize ? "portrait" : "landscape"],
  };

  const handleChange = (e) => {
    setActiveTech(e.target.value);
  };

  return (
    <main className='technology'>
      <PageTitle
        extraClass='tech-page-title'
        number='03'
        title='SPACE LAUNCH 101'
      />

      <div className='column-1'>
        <ImageFrame extraClass='tech-img' name={activeTech} images={images} />
      </div>

      <div className='column-2'>
        <StateSelection
          items={techItems}
          fieldName='tech'
          active={activeTech}
          handleChange={handleChange}
          extraClass='select-options'
          itemExtraClass='option'
        />

        <TechInfoDisplay {...activeTechInfo} />
      </div>
    </main>
  );
};

export default Technology;
