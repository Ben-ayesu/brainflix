import "./VideoPlayer.scss";
import "../../styles/App.scss";

const VideoPlayer = ({ selectVideo }) => {
  console.log(selectVideo);
  return (
    <div className="video-player">
      {/* Video player */}
      <div className="video-player__media">
        <video
          className="video-player__video"
          controls
          poster={selectVideo.image}
        ></video>
      </div>
    </div>
  );
};

export default VideoPlayer;
