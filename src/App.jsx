import { useState } from "react";
import videoData from "./data/video-details.json";
import logo from "./assets/Logo/BrainFlix-logo.svg";
import avatar from "./assets/Images/Mohan-muruge.jpg";
import Comments from "./components/Comments/Comments";
import Header from "./components/Header/Header";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import "./styles/App.scss";

console.log(videoData);

function App() {
  const [video, setVideo] = useState(videoData[0]);
  const [selectVideo, setSelectVideo] = useState({});

  const handleVideoClick = (id) => {
    console.log(id);
    const foundVideo = videoData.find((video) => video.id === id);
    console.log(foundVideo);

    setSelectVideo(foundVideo);
  };

  return (
    <>
      <Header logo={logo} avatar={avatar}></Header>
      <VideoPlayer video={video}></VideoPlayer>
      <Comments></Comments>
    </>
  );
}

export default App;
