import UploadForm from "../../components/UploadForm/UploadForm";
import thumbnail from "../../assets/Images/Upload-video-preview.jpg";
import "../../styles/App.scss";
import "./VideoUpload.scss";

const VideoUpload = () => {
  return (
    <>
      {/* Main container for video upload page */}
      <div className="videoUpload-page">
        <h1 className="videoUpload-page__header">Upload Video</h1>
        {/* Container for thumbnail and upload form */}
        <div className="videoUpload-page__container">
          {/* wrapper for title and image */}
          <div className="videoUpload-page__tb-wrapper">
            <h2 className="videoUpload-page__title">Video Thumbnail</h2>
            <img
              src={thumbnail}
              alt="Video Preview"
              className="videoUpload-page__thumbnail"
            />
          </div>
          {/* Container for upload form component */}
          <div className="videoUpload-page__form-container">
            <UploadForm></UploadForm>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoUpload;
