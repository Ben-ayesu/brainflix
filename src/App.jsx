import logo from "./assets/Logo/BrainFlix-logo.svg";
import avatar from "./assets/Images/Mohan-muruge.jpg";
import Comments from "./components/Comments/Comments";
import Header from "./components/Header/Header";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import "./styles/App.scss";

function App() {
  return (
    <>
      <Header logo={logo} avatar={avatar}></Header>
      <VideoPlayer></VideoPlayer>
      <Comments></Comments>
    </>
  );
}

export default App;
