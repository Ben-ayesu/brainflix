import Button from "../Button/Button";
import "./Header.scss";
import "../../styles/App.scss";

const Header = (props) => {
  return (
    <header className="header">
      {/* Logo */}
      <a href="google.com/#blank" className="header__logo">
        <img src={props.logo} alt="BrainFlix Logo" className="header__img" />
      </a>
      {/* Search box */}
      <div className="header__search-mobile">
        <i className="header__icon"></i>
        <input
          className="header__input"
          type="search"
          id="search"
          placeholder="Search"
        />
        <img src={props.avatar} alt="Mohan-muruge" className="avatar" />
      </div>
      {/* Button */}
      <Button text="Upload"></Button>
      {/* Avatar tablet */}
      <img src={props.avatar} alt="Mohan-muruge" className="avatar-tablet" />
    </header>
  );
};

export default Header;
