import "./Comment.scss";
import "../../styles/App.scss";

const Comment = ({ id, avatar, name, timestamp, comment }) => {
  return (
    <li className="comment" key={id}>
      <div className="avatar-comments-basic">{avatar}</div>
      <div class="comment__content">
        <div class="comment__name-date">
          <p class="comment__name">{name}</p>
          <p class="comment__date">
            {new Date(timestamp).toLocaleDateString()}
          </p>
        </div>
        <p class="comment__detail">{comment}</p>
      </div>
    </li>
  );
};

export default Comment;
