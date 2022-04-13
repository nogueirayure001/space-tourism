import "./destination-info-display.scss";

const DestinationInfoDisplay = ({ name, description, distance, travel }) => {
  return (
    <article className='destination-info'>
      <section className='about'>
        <h2 className='section-title'>{name}</h2>
        <p className='description'>{description}</p>
      </section>

      <section className='stats'>
        <section className='stat-item'>
          <h3 className='stat-title'>AVG. DISTANCE</h3>
          <p className='stat-value'>{distance}</p>
        </section>

        <section className='stat-item'>
          <h3 className='stat-title'>EST. TRAVEL TIME</h3>
          <p className='stat-value'>{travel}</p>
        </section>
      </section>
    </article>
  );
};

export default DestinationInfoDisplay;
