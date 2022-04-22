import { useMonitorPageWidth } from "../../../custom-hooks/use-monitor-page-width";
import { usePageContext } from "../../../custom-hooks/use-page-context";
import { usePageData } from "../../../custom-hooks/use-page-data";
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
  usePageContext("Technology");

  const { activeTab, activeTabInfo, setActiveTab } = usePageData("technology");

  const breachesThreshold = useMonitorPageWidth(1200);

  const images = {
    jpg: activeTabInfo.images[breachesThreshold ? "portrait" : "landscape"],
  };

  const handleChange = (e) => {
    setActiveTab(e.target.value);
  };

  return (
    <main className='technology'>
      <PageTitle
        extraClass='tech-page-title'
        number='03'
        title='SPACE LAUNCH 101'
      />

      <div className='column-1'>
        <ImageFrame extraClass='tech-img' name={activeTab} images={images} />
      </div>

      <div className='column-2'>
        <StateSelection
          items={techItems}
          fieldName='tech'
          active={activeTab}
          handleChange={handleChange}
          extraClass='select-options'
          itemExtraClass='option'
        />

        <TechInfoDisplay {...activeTabInfo} />
      </div>
    </main>
  );
};

export default Technology;
