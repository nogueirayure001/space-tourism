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
      {items.map(({ value, displayName }) => (
        <div
          className={`${itemExtraClass ? itemExtraClass : ""} selection-item`}
          key={value}
        >
          <input
            type='radio'
            id={value}
            name={fieldName}
            value={value}
            checked={active === value}
            onChange={handleChange}
          />
          <label htmlFor={value}>{displayName || value}</label>
        </div>
      ))}
    </fieldset>
  );
};

export default StateSelection;
