import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import shuffleIcon from "../assets/playerbuttons/shuffle.png";
import prevIcon from "../assets/playerbuttons/prev.png";
import playIcon from "../assets/playerbuttons/play.png";
import pauseIcon from "../assets/playerbuttons/pause.jpg";
import nextIcon from "../assets/playerbuttons/next.png";
import repeatIcon from "../assets/playerbuttons/repeat.png";

const Player = () => {
  const currentSong = useSelector((state) => state.currentSong);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (currentSong && audioRef.current) {
      audioRef.current.src = currentSong.preview;
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [currentSong]);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="container-fluid fixed-bottom bg-container pt-1">
      <div className="row h-100">
        <div className="col-lg-10 offset-lg-2">
          <div className="row h-100 flex-column justify-content-center align-items-center">
            <div className="col-6 col-md-4 playerControls">
              <div className="d-flex">
                <a href="#">
                  <img src={shuffleIcon} alt="shuffle" />
                </a>
                <a href="#">
                  <img src={prevIcon} alt="prev" />
                </a>
                <a href="#" onClick={handlePlayPause}>
                  <img src={isPlaying ? pauseIcon : playIcon} alt="play/pause" />
                </a>
                <a href="#">
                  <img src={nextIcon} alt="next" />
                </a>
                <a href="#">
                  <img src={repeatIcon} alt="repeat" />
                </a>
              </div>
              <div className="progress mt-3">
                <div role="progressbar"></div>
              </div>
              {currentSong && (
                <div className="current-song">
                  <p>
                    Now Playing: {currentSong.title} by {currentSong.artist.name}
                  </p>
                  <audio ref={audioRef} controls style={{ width: "100%" }} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
