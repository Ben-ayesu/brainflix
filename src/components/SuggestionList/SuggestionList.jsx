import "./SuggestionList.scss";
import "../../styles/App.scss";

const SuggestionList = ({ videos, handleVideoClick, selectedVideoId }) => {
  return (
    <ul className="suggestion__list">
      <h2 className="suggestion__header">Next Videos</h2>
      {videos
        .filter((video) => video.id !== selectedVideoId)
        ?.map((video) => (
          <li
            className="suggestion"
            key={video.id}
            onClick={() => handleVideoClick(video.id)}
          >
            <img src={video.image} alt={video.id} className="suggestion__img" />
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
