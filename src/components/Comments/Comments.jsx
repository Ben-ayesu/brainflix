import "./Comments.scss";
import "../../styles/App.scss";

const Comments = () => {
  return (
    <section className="comments">
      <p className="comments__count">3 Comments</p>
      <div className="comments__form-container">
        <img src="#" alt="Mohan Muruge" className="comments__avatar" />
        <form action="" className="comments__form">
          <label className="comments__label" htmlFor="comments_input">
            Join the Conversation
          </label>
          <textarea
            name="comments_input"
            rows="3"
            className="comments_input"
            placeholder="Add a new comment"
          ></textarea>
          <button className="comments_btn">Comment</button>
        </form>
      </div>
    </section>
  );
};

export default Comments;
