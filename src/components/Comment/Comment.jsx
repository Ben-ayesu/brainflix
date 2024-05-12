import "./Comment.scss";
import "../../styles/App.scss";

const Comment = ({ avatar, name, timestamp, comment }) => {
  return (
    <li className="comment">
      <div className="avatar-comments-basic">{avatar}</div>
      <div className="comment__content">
        <div className="comment__name-date">
          <p className="comment__name">{name}</p>
          <p className="comment__date">
            {new Date(timestamp).toLocaleDateString()}
          </p>
        </div>
        <p className="comment__detail">{comment}</p>
      </div>
    </li>
  );
};

export default Comment;
