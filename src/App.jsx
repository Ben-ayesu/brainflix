import { useState } from "react";
import videoData from "./data/video-details.json";
import logo from "./assets/Logo/BrainFlix-logo.svg";
import avatar from "./assets/Images/Mohan-muruge.jpg";
import Header from "./components/Header/Header";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import CommentsForm from "./components/CommentsForm/CommentsForm";
import SuggestionList from "./components/SuggestionList/SuggestionList";
import "./styles/App.scss";

function App() {
  const [videos, setVideos] = useState(videoData);
  const [selectVideo, setSelectedVideo] = useState(videos[0]);

  const handleVideoClick = (id) => {
    console.log(id);
    console.log("Video Clicked");
    const selectedVideo = videoData.find((video) => video.id === id);
    console.log(selectedVideo);
    setSelectedVideo(selectedVideo);
  };

  return (
    <>
      <Header logo={logo} avatar={avatar} className={"header"}></Header>
      <VideoPlayer selectVideo={selectVideo}></VideoPlayer>
      <CommentsForm selectVideo={selectVideo} avatar={avatar}></CommentsForm>
      <SuggestionList
        videos={videos}
        handleVideoClick={handleVideoClick}
        selectedVideoId={selectVideo.id}
      ></SuggestionList>
    </>
  );
}

export default App;
