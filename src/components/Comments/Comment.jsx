const Comment = (props) => {
  return (
    <div className="comment">
      <img src="" alt="" className="comment__avatar" />
      <div className="comment__content">
        <div className="comment__name-date">
          <p className="comment__name"></p>
          <p className="comment__date"></p>
        </div>
        <p className="comment__detail"></p>
      </div>
    </div>
  );
};
