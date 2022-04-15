import "./technology-info-display.scss";

const TechInfoDisplay = ({ name, description }) => {
  return (
    <section className='tech-info'>
      <h2 className='title'>
        THE TERMINOLOGY...
        <div className='main-term'>{name}</div>
      </h2>
      <p className='description'>{description}</p>
    </section>
  );
};

export default TechInfoDisplay;
