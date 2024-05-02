import "./Button.scss";
import "../../styles/App.scss";

const Button = (props) => {
  return <button className="header__btn">{props.text}</button>;
};

export default Button;
