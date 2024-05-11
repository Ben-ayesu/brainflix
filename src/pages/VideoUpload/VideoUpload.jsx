import UploadForm from "../../components/UploadForm/UploadForm";
import thumbnail from "../../assets/Images/Upload-video-preview.jpg";
// import { TextButton, Button } from "../../components/Button/Button";
// import PublishIcon from "../../assets/Icons/publish.svg";
import "../../styles/App.scss";
import "./VideoUpload.scss";

const VideoUpload = () => {
  return (
    <>
      <div className="videoUpload-page">
        <h1 className="videoUpload-page__header">Upload Video</h1>
        <div className="videoUpload-page__container">
          <div className="videoUpload-page__tb-wrapper">
            <h2 className="videoUpload-page__title">Video Thumbnail</h2>
            <img
              src={thumbnail}
              alt="Video Preview"
              className="videoUpload-page__thumbnail"
            />
          </div>
          <div className="videoUpload-page__form-container">
            <UploadForm></UploadForm>
          </div>
        </div>
        {/* <div className="uploadForm__btn-wrapper-desktop">
          <Button
            icon={PublishIcon}
            text={"Publish"}
            className={"btn"}
            type={"submit"}
          ></Button>
          <TextButton
            text={"cancel"}
            className={"uploadForm__cancel-btn"}
            type={"reset"}
          ></TextButton>
        </div> */}
      </div>
    </>
  );
};

export default VideoUpload;
