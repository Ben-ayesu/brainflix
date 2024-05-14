import { Link } from "react-router-dom";
import "./SuggestionList.scss";
import "../../styles/App.scss";

const SuggestionList = ({ videos, selectVideoId }) => {
  return (
    // Container for list of suggested videos
    <ul className="suggestion__list">
      <h2 className="suggestion__header">Next Videos</h2>
      {/* Filter and map through the suggested video array excluding the currently selected video */}
      {videos
        .filter((video) => video.id !== selectVideoId)
        .map((video) => (
          // List item for each suggested video
          <li key={video.id}>
            <Link className="suggestion" to={`/${video.id}`}>
              <img
                src={video.image}
                alt={video.title}
                className="suggestion__img"
              />
              <div className="suggestion__content">
                <p className="suggestion__title">{video.title}</p>
                <p className="suggestion__channel">{video.channel}</p>
              </div>
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default SuggestionList;
