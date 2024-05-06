import CommentsForm from "../../components/CommentsForm/CommentsForm";
import SuggestionList from "../../components/SuggestionList/SuggestionList";

const VideoUpload = ({ selectVideo, avatar, videos, handleVideoClick }) => {
  return (
    <div className="videoUpload-page">
      <div className="videoUpload__container">
        <SuggestionList
          videos={videos}
          handleVideoClick={handleVideoClick}
          selectedVideoId={selectVideo.id}
        ></SuggestionList>
        <CommentsForm selectVideo={selectVideo} avatar={avatar}></CommentsForm>
      </div>
    </div>
  );
};

export default VideoUpload;
