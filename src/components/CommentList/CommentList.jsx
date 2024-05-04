import "./CommentList.scss";
import "../../styles/App.scss";

const CommentList = ({ selectVideo, avatar }) => {
  return (
    <ul>
      {selectVideo.comments?.map((comment) => (
        <li className="comment" key={comment.id}>
          <div className="avatar-comments-basic">{avatar}</div>
          <div class="comment__content">
            <div class="comment__name-date">
              <p class="comment__name">{comment.name}</p>
              <p class="comment__date">
                {new Date(comment.timestamp).toLocaleDateString()}
              </p>
            </div>
            <p class="comment__detail">{comment.comment}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CommentList;
