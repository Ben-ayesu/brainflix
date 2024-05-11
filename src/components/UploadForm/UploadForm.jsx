import { useState } from "react";
import Button from "../Button/Button";
import PublishIcon from "../../assets/Icons/publish.svg";
import "../../styles/App.scss";
import "./UploadForm.scss";

const UploadForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    alert("Button has been clicked");
  };

  return (
    <>
      {/* Upload Form */}
      {/* <form onSubmit=""></form> */}
      <div className={`uploadForm`}>
        <label className="uploadForm__label" htmlFor="uploadForm__input">
          Title your Video
        </label>
        <input
          className={`uploadForm__title-input`}
          type="text"
          id="search"
          placeholder="Add a title to your video"
          onChange={handleChangeTitle}
          value={title}
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
          onChange={handleChangeDescription}
          value={description}
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
