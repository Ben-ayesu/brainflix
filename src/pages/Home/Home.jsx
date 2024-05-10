import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoPlayerDetails from "../../components/VideoPlayerDetails/VideoPlayerDetails";
import CommentsForm from "../../components/CommentsForm/CommentsForm";
import SuggestionList from "../../components/SuggestionList/SuggestionList";
import "../../styles/App.scss";

const Home = () => {
  const api_key = "c7e3d896-5e28-4e21-97db-4c461e74097a";
  const baseUrl = "https://unit-3-project-api-0a5620414506.herokuapp.com/";
  const [videos, setVideos] = useState([]); // store videos for side videos
  const [selectVideo, setSelectedVideo] = useState({}); // store for main video detail
  const { id } = useParams();
  console.log(id)

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

    if (id) {
      console.log(id)
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
