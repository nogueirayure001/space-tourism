import "./list.scss";

const List = ({ listItems, extraClass }) => {
  const formattedListItems = listItems.map((item, index) => (
    <li key={index} className='list-item'>
      {item}
    </li>
  ));

  const className = `list ${extraClass}`;

  return <ul className={className}>{formattedListItems}</ul>;
};

export default List;
