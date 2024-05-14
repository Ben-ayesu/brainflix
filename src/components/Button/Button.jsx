import "./Button.scss";
import "../../styles/App.scss";

const Button = ({ icon, text, className, type }) => {
  return (
    <button type={type} className={className}>
      <img src={icon} alt={text} className={`${className}__icon`} />
      <p className={`${className}__text`}>{text}</p>
    </button>
  );
};

const TextButton = ({ text, className, type, onClick }) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      <p className={`${className}__text`}>{text}</p>
    </button>
  );
};

export { Button, TextButton };
