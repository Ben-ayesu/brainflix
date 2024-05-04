import "./SuggestionList.scss";
import "../../styles/App.scss";

const SuggestionList = ({ videos }) => {
  console.log("This is the video", videos);
  return (
    <ul className="suggestion__list">
      <h2 className="suggestion__header">Next Video</h2>
      {videos?.map((video) => (
        <li className="suggestion" key={video.id}>
          <img
            src={video.image}
            alt="video thumbnail"
            className="suggestion__img"
          />
          <div class="suggestion__content">
            <p class="suggestion__title">{video.title}</p>
            <p class="suggestion__channel">{video.channel}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SuggestionList;
