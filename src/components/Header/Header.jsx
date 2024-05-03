import "./Header.scss";
import "../../styles/App.scss";
import Button from "../Button/Button";
import uploadIcon from "../../assets/Icons/upload.svg";

const Header = ({ logo, avatar, className }) => {
  return (
    <header className={className}>
      {/* Logo */}
      <a href="google.com/#blank" className={`${className}__logo`}>
        <img src={logo} alt="BrainFlix Logo" className={`${className}__img`} />
      </a>
      {/* Search box */}
      <div className={`${className}__search-mobile`}>
        <i className={`${className}__icon`}></i>
        <input
          className={`${className}__input`}
          type="search"
          id="search"
          placeholder="Search"
        />
        <img src={avatar} alt="Mohan-muruge" className="avatar" />
      </div>
      {/* Button */}
      <Button icon={uploadIcon} text="Upload" className={"btn"}></Button>
      {/* Avatar tablet */}
      <img src={avatar} alt="Mohan-muruge" className="avatar-tablet" />
    </header>
  );
};

export default Header;
