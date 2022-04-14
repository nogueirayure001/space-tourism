import "./crew-info-display.scss";

const CrewInfoDisplay = ({ role, name, bio }) => {
  return (
    <section className='crew-info'>
      <h2 className='role'>{role}</h2>
      <p className='name'>{name}</p>
      <p className='bio'>{bio}</p>
    </section>
  );
};

export default CrewInfoDisplay;
