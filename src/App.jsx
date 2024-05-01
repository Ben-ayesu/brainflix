import Comments from "./components/Comments/Comments";
import Header from "./components/Header/Header";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import "./styles/App.scss";

function App() {
  return (
    <>
      <Header></Header>
      <VideoPlayer></VideoPlayer>
      <Comments></Comments>
    </>
  );
}

export default App;
