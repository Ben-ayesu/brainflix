import "./VideoPlayer.scss";
import "../../styles/App.scss";

const VideoPlayer = ({ video }) => {
  console.log(video);
  return (
    <div className="video-player">
      {/* Video player */}
      <video
        className="video-player__media"
        controls
        poster={video.image}
      ></video>
      {/* Video player content */}
      <div className="video-player__details-wrapper">
        <h2 className="video-player__title">{video.title}</h2>
        {/* Wraps video channel, date, views, likes  */}
        <div className="video-player__metadata">
          <div className="video-player__channel-date">
            <h3 className="video-player__channel">By {video.channel}</h3>
            <h3 className="video-player__date">{video.timestamp}</h3>
          </div>
          <div className="video-player__views-likes">
            <div className="video-player__views-container">
              <i className="video-player__icon-views"></i>
              <h3 className="video-player__views">{video.views}</h3>
            </div>
            <div className="video-player__likes-container">
              <i className="video-player__icon-likes"></i>
              <h3 className="video-player__likes">{video.likes}</h3>
            </div>
          </div>
        </div>
        <p className="video-player__description">{video.description}</p>
        <p className="video-player__comments-count">
          {video.comments.length} Comments
        </p>
      </div>
    </div>
  );
};

export default VideoPlayer;
