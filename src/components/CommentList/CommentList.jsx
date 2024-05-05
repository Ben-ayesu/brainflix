import "./CommentList.scss";
import "../../styles/App.scss";
import Comment from "../Comment/Comment";

const CommentList = ({ selectVideo, avatar }) => {
  return (
    <ul>
      {selectVideo.comments?.map((comment) => (
        <Comment
          id={comment.id}
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
