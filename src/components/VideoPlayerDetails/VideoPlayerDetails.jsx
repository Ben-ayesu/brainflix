import "./VideoPlayerDetails.scss";
import "../../styles/App.scss";

const VideoPlayerDetails = ({ selectVideo }) => {
  return (
    <>
      {/* Video player details wrapper */}
      <div className="video-player__details-wrapper">
        <h2 className="video-player__title">{selectVideo.title}</h2>
        {/* Wraps video channel, date, views, likes  */}
        <div className="video-player__metadata">
          {/* Section for channel name and upload date */}
          <div className="video-player__channel-date">
            <h3 className="video-player__channel">By {selectVideo.channel}</h3>
            <h3 className="video-player__date">
              {new Date(selectVideo.timestamp).toLocaleDateString()}
            </h3>
          </div>
          {/* Section for channel views and likes */}
          <div className="video-player__views-likes">
            {/* View count container */}
            <div className="video-player__views-container">
              <i className="video-player__icon-views"></i>
              <h3 className="video-player__views">{selectVideo.views}</h3>
            </div>
            {/* Like count container */}
            <div className="video-player__likes-container">
              <i className="video-player__icon-likes"></i>
              <h3 className="video-player__likes">{selectVideo.likes}</h3>
            </div>
          </div>
        </div>
        <p className="video-player__description">{selectVideo.description}</p>
        {/* Display numbers of comments */}
        <p className="video-player__comments-count">
          {selectVideo.comments?.length} Comments
        </p>
      </div>
    </>
  );
};

export default VideoPlayerDetails;
