const Comment = (props) => {
  return (
    <div className="comment">
      <img src={props.src} alt="Avatar" className="comment__avatar" />
      <div className="comment__content">
        <div className="comment__name-date">
          <p className="comment__name">{props.name}</p>
          <p className="comment__date">{props.date}</p>
        </div>
        <p className="comment__detail">{props.detail}</p>
      </div>
    </div>
  );
};

export default Comment;
