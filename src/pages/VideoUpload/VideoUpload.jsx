import UploadForm from "../../components/UploadForm/UploadForm";
import thumbnail from "../../assets/Images/Upload-video-preview.jpg";
import "../../styles/App.scss";
import "./VideoUpload.scss";

const VideoUpload = () => {
  return (
    <div className="videoUpload-page">
      <h1 className="videoUpload-page__header">Upload Video</h1>
      <h2 className="videoUpload-page__title">Video Thumbnail</h2>
      <img
        src={thumbnail}
        alt="Video Preview"
        className="videoUpload-page__thumbnail"
      />
      <div className="videoUpload-page__container">
        <UploadForm></UploadForm>
      </div>
    </div>
  );
};

export default VideoUpload;
