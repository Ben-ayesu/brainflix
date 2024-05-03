import "./CommentList.scss";

const CommentList = ({ video }) => {
  return (
    <ul>
      {video.comments?.map((comment) => (
        // console.log("this is one momment", comment.comment);
        <li className="comment" key={comment.id}>
          <div class="comment__wrapper">
            <div class="comment__name-date">
              <p class="comment__name">{comment.name}</p>
              <p class="comment__date">{comment.timestamp}</p>
            </div>
            <p class="comment__detail">{comment.comment}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CommentList;
