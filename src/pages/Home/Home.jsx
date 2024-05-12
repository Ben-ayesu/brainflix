import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoPlayerDetails from "../../components/VideoPlayerDetails/VideoPlayerDetails";
import CommentsForm from "../../components/CommentsForm/CommentsForm";
import SuggestionList from "../../components/SuggestionList/SuggestionList";
import "../../styles/App.scss";

const Home = () => {
  // Api config
  const api_key = "c7e3d896-5e28-4e21-97db-4c461e74097a";
  const baseUrl = "https://unit-3-project-api-0a5620414506.herokuapp.com/";
  
  // Variable state
  const [videos, setVideos] = useState([]); // store videos for side videos
  const [selectVideo, setSelectedVideo] = useState({}); // store for main video detail
  const { id } = useParams(); // get video id from url param

  // Fetch all videos on initial render
  useEffect(() => {
    const getVideos = async () => {
      try {
        const getVideos = await axios.get(
          `${baseUrl}videos?api_key=${api_key}`
        );
        setVideos(getVideos.data); // sets videos to array of video
      } catch (error) {
        console.log("Could not fetch data", error);
      }
    };
    getVideos();
  }, []);

  // Fetch selected video 
  useEffect(() => {
    const getSingleVideo = async (id) => {
      try {
        const getVideo = await axios.get(
          `${baseUrl}videos/${id}?api_key=${api_key}`
        );
        setSelectedVideo(getVideo.data);
      } catch (error) {
        console.log("Could not fetch data", error);
      }
    };

    // get id if exist others set default
    if (id) {
      getSingleVideo(id);
    } else {
      getSingleVideo("84e96018-4022-434e-80bf-000ce4cd12b8");
    }
  }, [id]);

  return (
    <div className="home-page">
      {/* Main video player component */}
      <VideoPlayer selectVideo={selectVideo}></VideoPlayer>
      {/* Container for video details and suggestions list */}
      <div className="video-player__container">
        {/* Video detail and comment form */}
        <div className="video-player__body">
          <VideoPlayerDetails selectVideo={selectVideo}></VideoPlayerDetails>
          <CommentsForm selectVideo={selectVideo}></CommentsForm>
        </div>
        {/* Suggestion videos list */}
        <SuggestionList
          videos={videos}
          selectVideoId={selectVideo.id}
        ></SuggestionList>
      </div>
    </div>
  );
};

export default Home;
