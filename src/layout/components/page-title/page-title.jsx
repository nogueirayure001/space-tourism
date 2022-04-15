import "./page-title.scss";

const PageTitle = ({ number, title, extraClass }) => {
  return (
    <h1 className={`${extraClass ? extraClass : ""} page-title`}>
      <span className='title-number'>{number}</span>
      {title}
    </h1>
  );
};

export default PageTitle;
