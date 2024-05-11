import { useState } from "react";
import {Button, TextButton} from "../Button/Button";
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
    const formData = { title, description };
    console.log("Form data submitted:", formData);
    alert("Button has been clicked");
  };

  return (
    // Upload Form
    <form className="uploadForm" onSubmit={handleSubmit}>
      <label className="uploadForm__label" htmlFor="titleInput">
        Title your Video
      </label>
      <input
        className={`uploadForm__title-input`}
        type="text"
        id="titleInput"
        placeholder="Add a title to your video"
        onChange={handleChangeTitle}
        value={title}
      />
      <label className="uploadForm__label" htmlFor="descriptionInput">
        Add a Video Description
      </label>
      <textarea
        className={`uploadForm__description-input`}
        rows="6"
        type="textarea"
        id="descriptionInput"
        placeholder="Add a description to your video"
        onChange={handleChangeDescription}
        value={description}
      />
      <div className="uploadForm__btn-wrapper">
        <Button
          icon={PublishIcon}
          text={"Publish"}
          className={"btn"}
          type="submit"
        ></Button>
        <TextButton
          text={"cancel"}
          className={"uploadForm__cancel-btn"}
          type={"reset"}
        ></TextButton>
      </div>
    </form>
  );
};

export default UploadForm;
