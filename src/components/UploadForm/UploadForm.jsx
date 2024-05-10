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
        <textarea
          className={`uploadForm__description-input`}
          rows="6"
          type="textarea"
          id="search"
          placeholder="Add a description to your video"
        />
      </div>
      <div className="uploadForm__btn-wrapper">
        <Button icon={PublishIcon} text={"Publish"} className={"btn"}></Button>
        <button className="uploadForm__cancel-btn">cancel</button>
      </div>
    </>
  );
};

export default UploadForm;
