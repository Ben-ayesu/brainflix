import { useState } from "react";
import axios from "axios";
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

  // Form validation logic
  const isFormValid = () => {
    // Form validation
    if (title === "" || description === "") {
      toast("Please fill on both title and description");
      return false;
    } else if (title.length < 3 || description.length < 10) {
      toast(
        "Please enter title longer than 3 characters and description longer than 10 characters"
      );
      return false;
    }
    return true;
  };

  // Post video to server
  const postVideo = async (newVideo) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/videos`,
        newVideo
      );
      console.log("video uploaded successfully", response.data);
      toast("Video has been uploaded");
      // Navigate home after 3 seconds for visual feedback
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      console.log("error uploading data", error);
      toast.error("Error uploading video. Please try again");
    }
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    const newVideo = {
      title: title.trim(),
      description: description.trim(),
    };

    if (isFormValid()) {
      postVideo(newVideo);
    }
  };

  // Handle cancel button
  const handleCancel = () => {
    setTitle("");
    setDescription("");
    toast("Inputs cancelled");
    // Navigate home after 3 seconds for visual feedback
    setTimeout(() => {
      navigate("/");
    }, 3000);
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
