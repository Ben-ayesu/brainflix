import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Button, TextButton } from "../Button/Button";
import PublishIcon from "../../assets/Icons/publish.svg";
import "../../styles/App.scss";
import "./UploadForm.scss";

const UploadForm = () => {
  const [title, setTitle] = useState(""); // Store video title
  const [description, setDescription] = useState(""); // Store video description
  const navigate = useNavigate(); // To navigate

  // Update title state
  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  // Update description state
  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    const uploadFormData = {
      title: title.trim(),
      description: description.trim(),
    };

    // Form validation
    if (uploadFormData.title === "" || uploadFormData.description === "") {
      toast("Please fill on both title and description");
    } else if (
      uploadFormData.title.length < 3 ||
      uploadFormData.description.length < 5
    ) {
      toast("Please enter longer title or description");
    } else {
      toast("Video has has been uploaded", uploadFormData.title);
      event.target.reset(); // Clear form
      // Navigate home after 5 seconds
      setTimeout(() => {
        navigate("/");
      }, 5000);
    }
  };

  // Handle cancel button
  const handleCancel = () => {
    setTitle("");
    setDescription("");
    toast("Inputs cancelled");
  };

  return (
    // Upload form container
    <form className="uploadForm" onSubmit={handleSubmit}>
      {/* Container for toasts */}
      <ToastContainer></ToastContainer>
      {/* Title and Description input fields w/ label */}
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
      {/* Line divider for desktop */}
      <div className="uploadForm__line-divider"></div>
      {/* Button wrapper */}
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
