import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoPlayerDetails from "../../components/VideoPlayerDetails/VideoPlayerDetails";
import CommentsForm from "../../components/CommentsForm/CommentsForm";
import SuggestionList from "../../components/SuggestionList/SuggestionList";
import "../../styles/App.scss";

const Home = () => {
  const [videos, setVideos] = useState([]); // store videos for side videos
  const [selectVideo, setSelectedVideo] = useState({}); // store for main video detail
  const { id } = useParams();

  useEffect(() => {
    const getVideos = async () => {
      console.log("hello from home", process.env.REACT_APP_API_URL); // Log before making the request

      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/videos`
        );
        setVideos(response.data); // sets videos to array of video
      } catch (error) {
        console.log("Could not fetch data", error);
      }
    };
    getVideos();
  }, []);

  useEffect(() => {
    const getSingleVideo = async (id) => {
      try {
        const getVideo = await axios.get(
          `${process.env.REACT_APP_API_URL}/videos/${id}`
        );
        setSelectedVideo(getVideo.data);
      } catch (error) {
        console.log("Could not fetch data", error);
      }
    };

    if (id) {
      console.log(id);
      getSingleVideo(id);
    } else {
      getSingleVideo("84e96018-4022-434e-80bf-000ce4cd12b8");
    }
  }, [id]);

  return (
    <div className="home-page">
      <VideoPlayer selectVideo={selectVideo}></VideoPlayer>
      <div className="video-player__container">
        <div className="video-player__body">
          <VideoPlayerDetails selectVideo={selectVideo}></VideoPlayerDetails>
          <CommentsForm selectVideo={selectVideo}></CommentsForm>
        </div>
        <SuggestionList
          videos={videos}
          selectVideoId={selectVideo.id}
        ></SuggestionList>
      </div>
    </div>
  );
};

export default Home;
