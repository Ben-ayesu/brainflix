import avatar from "../../assets/Images/Mohan-muruge.jpg";
import "./Comments.scss";
import "../../styles/App.scss";

const Comments = (props) => {
  return (
    <section className="comments">
      <p className="comments__count">3 Comments</p>
      <div className="comments__form-container">
        <img src={avatar} alt="Mohan Muruge" className="avatar-comments" />
        <form action="" className="comments__form">
          <div className="comments__input-container">
            <label className="comments__label" htmlFor="comments_input">
              Join the Conversation
            </label>
            <textarea
              rows="3"
              className="comments__input"
              placeholder="Add a new comment"
            ></textarea>
          </div>
          <button className="comments__btn">Comment</button>
        </form>
      </div>
    </section>
  );
};

export default Comments;
