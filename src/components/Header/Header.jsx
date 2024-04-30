import logo from "../../assets/Logo/BrainFlix-logo.svg";
import "./Header.scss";
import "../../styles/partials/_global.scss";

const Header = () => {
  return (
    <header className="header">
      {/* Logo */}
      <a href="google.com/#blank" className="header__logo">
        <img src={logo} alt="BrainFlix Logo" className="header__img" />
      </a>
      {/* Search box */}
      <input
        className="header__input"
        type="search"
        id="search"
        placeholder="Search"
      />
      {/* Button */}
      <button className="header__btn" id="upload">
        Upload
      </button>
    </header>
  );
};

export default Header;
