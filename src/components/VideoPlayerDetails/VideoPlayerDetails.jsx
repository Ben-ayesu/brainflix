import "./VideoPlayerDetails.scss";
import "../../styles/App.scss";

const VideoPlayerDetails = ({ selectVideo }) => {
  console.log("video player details", selectVideo);

  return (
    <>
      {/* Video player content */}
      <div className="video-player__details-wrapper">
        <h2 className="video-player__title">{selectVideo.title}</h2>
        {/* Wraps video channel, date, views, likes  */}
        <div className="video-player__metadata">
          <div className="video-player__channel-date">
            <h3 className="video-player__channel">By {selectVideo.channel}</h3>
            <h3 className="video-player__date">
              {new Date(selectVideo.timestamp).toLocaleDateString()}
            </h3>
          </div>
          <div className="video-player__views-likes">
            <div className="video-player__views-container">
              <i className="video-player__icon-views"></i>
              <h3 className="video-player__views">{selectVideo.views}</h3>
            </div>
            <div className="video-player__likes-container">
              <i className="video-player__icon-likes"></i>
              <h3 className="video-player__likes">{selectVideo.likes}</h3>
            </div>
          </div>
        </div>
        <p className="video-player__description">{selectVideo.description}</p>
        <p className="video-player__comments-count">
          {selectVideo.comments?.length} Comments
        </p>
      </div>
    </>
  );
};

export default VideoPlayerDetails;
