import { useState } from "react";
import videoData from "./data/video-details.json";
import logo from "./assets/Logo/BrainFlix-logo.svg";
import avatar from "./assets/Images/Mohan-muruge.jpg";
import Header from "./components/Header/Header";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import CommentsForm from "./components/CommentsForm/CommentsForm";
import "./styles/App.scss";

console.log(videoData);

function App() {
  const [video, setVideo] = useState(videoData[0]);
  console.log(video);
  const [selectVideo, setSelectVideo] = useState({});

  const handleVideoClick = (id) => {
    console.log(id);
    console.log("Video Clicked");
    const selectedVideo = videoData.find((video) => video.id === id);
    console.log(selectedVideo);

    setSelectVideo(selectedVideo);
  };

  return (
    <>
      <Header logo={logo} avatar={avatar}></Header>
      <VideoPlayer video={video}></VideoPlayer>
      <CommentsForm></CommentsForm>
    </>
  );
}

export default App;
