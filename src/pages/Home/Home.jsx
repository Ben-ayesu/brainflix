import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoPlayerDetails from "../../components/VideoPlayerDetails/VideoPlayerDetails";
import CommentsForm from "../../components/CommentsForm/CommentsForm";
import SuggestionList from "../../components/SuggestionList/SuggestionList";

const Home = ({ selectVideo, avatar, videos, handleVideoClick }) => {
  return (
    <div className="home-page">
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
    </div>
  );
};

export default Home;
