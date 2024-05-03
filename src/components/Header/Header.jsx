import "./Header.scss";
import "../../styles/App.scss";
import Button from "../Button/Button";

const Header = ({ logo, avatar }) => {
  return (
    <header className="header">
      {/* Logo */}
      <a href="google.com/#blank" className="header__logo">
        <img src={logo} alt="BrainFlix Logo" className="header__img" />
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
        <img src={avatar} alt="Mohan-muruge" className="avatar" />
      </div>
      {/* Button */}
      <Button text="Upload"></Button>
      {/* Avatar tablet */}
      <img src={avatar} alt="Mohan-muruge" className="avatar-tablet" />
    </header>
  );
};

export default Header;
