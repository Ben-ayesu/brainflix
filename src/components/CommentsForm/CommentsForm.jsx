import "./CommentsForm.scss";
import "../../styles/App.scss";
import CommentList from "../CommentList/CommentList";
import {Button} from "../Button/Button";
import CommentIcon from "../../assets/Icons/add_comment.svg";
import avatar from "../../assets/Images/Mohan-muruge.jpg";
import { useState } from "react";

const CommentsForm = ({ selectVideo }) => {

  const [comment, setComment] = useState("")

  const handleChangeComment = (event) => {
    setComment(event.target.value);
  };

  const handleComment = (event) => {
    event.preventDefault();
    const comment = event.target.value
    console.log("Button has been clicked")
    alert("Your new comment is:", comment)
  }

  return (
    <section className="comments">
      <div className="comments__form-container">
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
