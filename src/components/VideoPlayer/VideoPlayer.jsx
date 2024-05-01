import "./VideoPlayer.scss";
import "../../styles/App.scss";

const VideoPlayer = () => {
  return (
    <div className="video-player">
      {/* Video player */}
      <video
        className="video-player__media"
        controls
        poster="https://unit-3-project-api-0a5620414506.herokuapp.com/images/image0.jpg"
      ></video>
      {/* Video player content */}
      <div className="video-player__details-wrapper">
        <h2 className="video-player__title">
          The Future of Artificial Intelligence
        </h2>
        {/* Wraps video channel, date, views, likes  */}
        <div className="video-player__metadata">
          <div className="video-player__channel-date">
            <h3 className="video-player__channel">By Aiden Thompson</h3>
            <h3 className="video-player__date">8/8/2023</h3>
          </div>
          <div className="video-player__views-likes">
            <h3 className="video-player__views">
              <i className="video-player__icon"></i>980,544
            </h3>
            <h3 className="video-player__likes">
              <i className="video-player__icon"></i>22,479
            </h3>
          </div>
        </div>
        <p className="video-player__description">
          Explore the cutting-edge developments and predictions for Artificial
          Intelligence in the coming years. From revolutionary breakthroughs in
          machine learning to the ethical considerations influencing AI
          advancements, this exploration transcends the boundaries of mere
          speculation. Join us on a journey that navigates the intricate
          interplay between innovation, ethics, and the ever-evolving tech
          frontier.
        </p>
      </div>
    </div>
  );
};

export default VideoPlayer;
