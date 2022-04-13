import "./state-selection.scss";

const StateSelection = ({
  items,
  fieldName,
  active,
  handleChange,
  extraClass,
  itemExtraClass,
}) => {
  return (
    <fieldset className={`${extraClass ? extraClass : ""} state-selection`}>
      {items.map(({ value }) => (
        <div
          className={`${itemExtraClass ? itemExtraClass : ""} selection-item`}
          key={value}
        >
          <label htmlFor={value}>{value}</label>
          <input
            type='radio'
            id={value}
            name={fieldName}
            value={value}
            checked={active === value}
            onChange={handleChange}
          />
        </div>
      ))}
    </fieldset>
  );
};

export default StateSelection;
