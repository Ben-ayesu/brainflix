import "./styles/App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import videoData from "./data/video-details.json";
import logo from "./assets/Logo/BrainFlix-logo.svg";
import avatar from "./assets/Images/Mohan-muruge.jpg";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import VideoUpload from "./pages/VideoUpload/VideoUpload";

function App() {
  const [videos, setVideos] = useState(videoData); // store videos for side videos
  const [selectVideo, setSelectedVideo] = useState(videos[0]); // store for main video detail

  // handle click for suggestion list
  const handleVideoClick = (id) => {
    console.log("Video Clicked");
    const selectedVideo = videoData.find((video) => video.id === id);
    setSelectedVideo(selectedVideo);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Header logo={logo} avatar={avatar} className={"header"}></Header>
        <Routes>
          <Route
            path="/home"
            element={
              <Home
                selectVideo={selectVideo}
                avatar={avatar}
                videos={videos}
                handleVideoClick={handleVideoClick}
              ></Home>
            }
          ></Route>
          <Route path="/home" element={<Navigate to="/" />}></Route>
          <Route
            path="/videoupload"
            element={
              <VideoUpload
                selectVideo={selectVideo}
                avatar={avatar}
                videos={videos}
                handleVideoClick={handleVideoClick}
              ></VideoUpload>
            }
          ></Route>
          <Route path="*" element={<h1>No path found</h1>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
