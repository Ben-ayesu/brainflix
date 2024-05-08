import "./styles/App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import videoData from "./data/video-details.json";
import logo from "./assets/Logo/BrainFlix-logo.svg";
import avatar from "./assets/Images/Mohan-muruge.jpg";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import VideoUpload from "./pages/VideoUpload/VideoUpload";

function App() {
  const [videos, setVideos] = useState([]); // store videos for side videos
  const [selectVideo, setSelectedVideo] = useState(); // store for main video detail
  const api_key = "c7e3d896-5e28-4e21-97db-4c461e74097a";

  // handle click for suggestion list
  const handleVideoClick = (id) => {
    console.log("Video Clicked");
    const selectedVideo = videoData.find((video) => video.id === id);
    setSelectedVideo(selectedVideo);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getVideos = await axios.get(
          `https://unit-3-project-api-0a5620414506.herokuapp.com/videos?api_key=${api_key}`
        );
        setVideos(getVideos.data); // sets videos to array of video

        const getVideo = await axios.get(
          `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${getVideos.data[0].id}?api_key=${api_key}`
        );
        setSelectedVideo(getVideo.data); // set selectVideo to state
      } catch (error) {
        console.log("Could not fetch data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        {/* Navigation Header */}
        <Header logo={logo} avatar={avatar} className={"header"}></Header>
        {/* Web Pages */}
        <Routes>
          {/* Home Page */}
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
          {/* Video Upload Page */}
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
          {/* Page not found */}
          <Route path="*" element={<h1>No path found</h1>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
