import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextButton } from "../Button/Button";
import PublishIcon from "../../assets/Icons/publish.svg";
import "../../styles/App.scss";
import "./UploadForm.scss";
import { ToastContainer, toast } from "react-toastify";

const UploadForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const uploadFormData = {
      title: title.trim(),
      description: description.trim(),
    };

    if (uploadFormData.title === "" || uploadFormData.description === "") {
      toast("Please fill on both title and description");
    } else if (
      uploadFormData.title.length < 3 ||
      uploadFormData.description.length < 5
    ) {
      toast("Please enter longer title or description");
    } else {
      toast("Video has has been uploaded", uploadFormData.title);
      event.target.reset();
      setTimeout(() => {
        navigate("/");
      }, 5000);
    }
  };

  const handleCancel = () => {
    setTitle("");
    setDescription("");
    alert("Inputs cancelled");
  };

  return (
    <form className="uploadForm" onSubmit={handleSubmit}>
      <ToastContainer></ToastContainer>
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
      <div className="uploadForm__line-divider"></div>
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
          type={"button"}
          onClick={handleCancel}
        ></TextButton>
      </div>
    </form>
  );
};

export default UploadForm;
