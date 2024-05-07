import "../../styles/App.scss";
import "./UploadForm.scss";
import Button from "../Button/Button";
import PublishIcon from "../../assets/Icons/publish.svg";

const UploadForm = () => {
  return (
    <>
      {/* Upload Form */}
      <div className={`uploadForm`}>
        <label className="uploadForm__label" htmlFor="uploadForm__input">
          Title your Video
        </label>
        <input
          className={`uploadForm__title-input`}
          type="text"
          id="search"
          placeholder="Add a title to your video"
        />
        <label className="uploadForm__label" htmlFor="uploadForm__input">
          Add a Video Description
        </label>
        <input
          className={`uploadForm__description-input`}
          type="textarea"
          id="search"
          placeholder="Add a description to your video"
        />
      </div>
      <Button icon={PublishIcon} text={"Publish"} className={"btn"}></Button>
      <button className="uploadForm__cancel-btn">cancel</button>
    </>
  );
};

export default UploadForm;
