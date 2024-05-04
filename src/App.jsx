import { useState } from "react";
import videoData from "./data/video-details.json";
import logo from "./assets/Logo/BrainFlix-logo.svg";
import avatar from "./assets/Images/Mohan-muruge.jpg";
import Header from "./components/Header/Header";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import VideoPlayerDetails from "./components/VideoPlayerDetails/VideoPlayerDetails";
import CommentsForm from "./components/CommentsForm/CommentsForm";
import SuggestionList from "./components/SuggestionList/SuggestionList";
import "./styles/App.scss";

function App() {
  const [videos, setVideos] = useState(videoData); // store videos using state to keep track
  const [selectVideo, setSelectedVideo] = useState(videos[0]); // store initial video to the first

  // handle click for suggestion list
  const handleVideoClick = (id) => {
    console.log("Video Clicked");
    const selectedVideo = videoData.find((video) => video.id === id);
    setSelectedVideo(selectedVideo);
  };

  return (
    <>
      <Header logo={logo} avatar={avatar} className={"header"}></Header>
      <VideoPlayer selectVideo={selectVideo}></VideoPlayer>
      <div className="video-player__container">
        <div className="video-player__body">
          <VideoPlayerDetails selectVideo={selectVideo}></VideoPlayerDetails>
          <CommentsForm
            selectVideo={selectVideo}
            avatar={avatar}
          ></CommentsForm>
        </div>
        <SuggestionList
          videos={videos}
          handleVideoClick={handleVideoClick}
          selectedVideoId={selectVideo.id}
        ></SuggestionList>
      </div>
    </>
  );
}

export default App;
