import "../../styles/App.scss";
import "./UploadForm.scss";
import Button from "../Button/Button";
import UploadIcon from "../../assets/Icons/upload.svg";

const UploadForm = () => {
  return (
    <>
      {/* Upload Form */}
      <div className={`uploadForm`}>
        <label htmlFor="uploadForm__label">Title your Video</label>
        <input
          className={`uploadForm__input`}
          type="text"
          id="search"
          placeholder="Add a title to your video"
        />
        <label htmlFor="uploadForm__label">Add a Video Description</label>
        <input
          className={`uploadForm__input`}
          type="text"
          id="search"
          placeholder="Add a title to your video"
        />
      </div>
      <Button icon={UploadIcon} text={"Upload"} className={"btn"}></Button>
      <button>cancel</button>
    </>
  );
};

export default UploadForm;
