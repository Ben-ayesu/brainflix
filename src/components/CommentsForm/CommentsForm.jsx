import { Button } from "../Button/Button";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import CommentList from "../CommentList/CommentList";
import CommentIcon from "../../assets/Icons/add_comment.svg";
import avatar from "../../assets/Images/Mohan-muruge.jpg";
import "react-toastify/dist/ReactToastify.css";
import "./CommentsForm.scss";
import "../../styles/App.scss";

const CommentsForm = ({ selectVideo }) => {
  const [comment, setComment] = useState(""); // initialize state

  const handleChangeComment = (event) => {
    setComment(event.target.value);
  };

  const handleComment = (event) => {
    event.preventDefault();

    // Validate comment input
    if (comment.trim() === "") {
      toast("Please enter a valid comment"); // Empty comment check
    } else if (comment.length < 3) {
      toast("Please enter a longer comment more than 3 characters"); // Minimum length check
    } else {
      toast(`your new comment: ${comment}`); // Toast to confirm comment is added
    }
  };

  return (
    // Comments form and comment list display
    <section className="comments">
      {/* Toast notification for user feedback */}
      <ToastContainer></ToastContainer>
      {/* Container for avatar and input form */}
      <div className="comments__form-container">
        {/* Avatar and form elements */}
        <img src={avatar} alt="Mohan Muruge" className="avatar-comments" />
        <form onSubmit={handleComment} className="comments__form">
          <div className="comments__input-container">
            <label className="comments__label" htmlFor="comments__input">
              Join the Conversation
            </label>
            <textarea
              rows="3"
              id="comments__input"
              className="comments__input"
              placeholder="Add a new comment"
              value={comment}
              onChange={handleChangeComment}
            ></textarea>
          </div>
          <Button
            icon={CommentIcon}
            text={"Comment"}
            className={"btn-comment"}
            type={"submit"}
          ></Button>
        </form>
      </div>
      <CommentList selectVideo={selectVideo}></CommentList>
    </section>
  );
};

export default CommentsForm;
