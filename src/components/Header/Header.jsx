import "./Header.scss";
import "../../styles/App.scss";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import uploadIcon from "../../assets/Icons/upload.svg";
import logo from "../../assets/Logo/BrainFlix-logo.svg";
import avatar from "../../assets/Images/Mohan-muruge.jpg";

const Header = () => {
  const className = "header";
  return (
    <header className={className}>
      {/* Logo - Navigates Home */}
      <Link to={"/"} className={`${className}__logo`}>
        <img src={logo} alt="BrainFlix Logo" className={`${className}__img`} />
      </Link>
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
      {/* Button - Navigates to upload page */}
      <Link to={"/videoupload"} className={`${className}__link`}>
        <Button icon={uploadIcon} text="Upload" className={"btn"}></Button>
      </Link>
      {/* Avatar tablet */}
      <img src={avatar} alt="Mohan-muruge" className="avatar-tablet" />
    </header>
  );
};

export default Header;
