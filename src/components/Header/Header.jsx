import logo from "../../assets/Logo/BrainFlix-logo.svg";
import avatar from "../../assets/Images/Mohan-muruge.jpg";
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
      <div className="header__search-mobile">
        <i className="header__icon"></i>
        <input
          className="header__input"
          type="search"
          id="search"
          placeholder="Search"
        />
        <img src={avatar} alt="Mohan-muruge" className="header__avatar" />
      </div>
      {/* Button */}
      <button className="header__btn" id="upload">
        Upload
      </button>
    </header>
  );
};

export default Header;
