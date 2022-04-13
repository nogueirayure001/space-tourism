import "./page-title.scss";

const PageTitle = ({ number, title }) => {
  return (
    <h1 className='page-title'>
      <span className='title-number'>{number}</span>
      {title}
    </h1>
  );
};

export default PageTitle;
