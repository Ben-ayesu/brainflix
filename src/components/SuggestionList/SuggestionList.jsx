import "./SuggestionList.scss";
import "../../styles/App.scss";
import { Link } from "react-router-dom";

const SuggestionList = ({ videos, selectVideoId }) => {
  return (
    <ul className="suggestion__list">
      <h2 className="suggestion__header">Next Videos</h2>
      {videos
        .filter((video) => video.id !== selectVideoId)
        .map((video) => (
          <li key={video.id}>
            <Link className="suggestion" to={`/${video.id}`}>
              <img
                src={video.image}
                alt={video.title}
                className="suggestion__img"
              />
              <div class="suggestion__content">
                <p class="suggestion__title">{video.title}</p>
                <p class="suggestion__channel">{video.channel}</p>
              </div>
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default SuggestionList;
