import "./CommentsForm.scss";
import "../../styles/App.scss";
import CommentList from "../CommentList/CommentList";
import Button from "../Button/Button";
import CommentIcon from "../../assets/Icons/add_comment.svg";

const CommentsForm = ({ selectVideo, avatar }) => {
  return (
    <section className="comments">
      <div className="comments__form-container">
        <img src={avatar} alt="Mohan Muruge" className="avatar-comments" />
        <form action="" className="comments__form">
          <div className="comments__input-container">
            <label className="comments__label" htmlFor="comments__input">
              Join the Conversation
            </label>
            <textarea
              rows="3"
              id="comments__input"
              className="comments__input"
              placeholder="Add a new comment"
            ></textarea>
          </div>
          <Button
            icon={CommentIcon}
            text={"Comment"}
            className={"btn-comment"}
          ></Button>
        </form>
      </div>
      <CommentList selectVideo={selectVideo}></CommentList>
    </section>
  );
};

export default CommentsForm;
