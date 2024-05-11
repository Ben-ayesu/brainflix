import "./Button.scss";
import "../../styles/App.scss";

const Button = ({ icon, text, className }) => {
  return (
    <button type="submit" className={className}>
      <img src={icon} alt="Button Icon" className={`${className}__icon`} />
      <p className={`${className}__text`}>{text}</p>
    </button>
  );
};

export default Button;
