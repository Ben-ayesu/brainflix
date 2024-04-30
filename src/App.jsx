import logo from "./assets/Logo/BrainFlix-logo.svg";
import "./styles/App.scss";

function App() {
  return (
    <header className="header">
      <a href="google.com/#blank" className="header__logo">
        <img src={logo} alt="BrainFlix Logo" className="header__img" />
      </a>
    </header>
  );
}

export default App;
