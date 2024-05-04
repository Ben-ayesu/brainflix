import "./VideoPlayer.scss";
import "../../styles/App.scss";

const VideoPlayer = ({ selectVideo }) => {
  console.log(selectVideo);
  return (
    <div className="video-player">
      {/* Video player */}
      <video
        className="video-player__media"
        controls
        poster={selectVideo.image}
      ></video>
    </div>
  );
};

export default VideoPlayer;
