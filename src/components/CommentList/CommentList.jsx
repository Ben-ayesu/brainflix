import Comment from "../Comment/Comment";
import "./CommentList.scss";
import "../../styles/App.scss";

const CommentList = ({ selectVideo, avatar }) => {
  return (
    <ul>
      {selectVideo.comments?.map((comment) => (
        <Comment
          id={comment.id}
          key={comment.id}
          avatar={avatar}
          name={comment.name}
          timestamp={comment.timestamp}
          comment={comment.comment}
        ></Comment>
      ))}
    </ul>
  );
};

export default CommentList;
