import "./button.scss";

const Button = ({ style, extraClass, handleClick, ...otherProps }) => {
  return (
    <button
      className={`button ${extraClass}`}
      style={style}
      onClick={handleClick}
      {...otherProps}
    ></button>
  );
};

export default Button;
