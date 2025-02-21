import { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongs, setCurrentSong, toggleLikeSong } from "../redux/actions";

const MusicSection = ({ artistName, sectionId }) => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs);
  const likedSongs = useSelector((state) => state.likedSongs);

  useEffect(() => {
    const fetchMusic = async () => {
      try {
        let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistName}`);
        if (response.ok) {
          let { data } = await response.json();
          dispatch(fetchSongs(data));
        } else {
          throw new Error("Error in fetching songs");
        }
      } catch (err) {
        console.log("error", err);
      }
    };

    fetchMusic();
  }, [artistName, dispatch]);

  const albumCard = (singleSong) => {
    const isLiked = likedSongs.includes(singleSong.id);
    return (
      <div className="col text-center" key={singleSong.id}>
        <img
          className="img-fluid"
          src={singleSong.album.cover_medium}
          alt="track"
          onClick={() => dispatch(setCurrentSong(singleSong))}
        />
        <p>
          Track: {singleSong.title}
          <br />
          Artist: {singleSong.artist.name}
        </p>
        <button onClick={() => dispatch(toggleLikeSong(singleSong.id))}>{isLiked ? "❤️" : "♡"}</button>
      </div>
    );
  };

  return (
    <div id={sectionId}>
      <h2>{artistName} Music</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
        {songs &&
          songs
            .filter((song) => song.artist.name.toLowerCase() === artistName.toLowerCase())
            .sort(() => 0.5 - Math.random())
            .slice(0, 4)
            .map((song) => albumCard(song))}
      </div>
    </div>
  );
};

MusicSection.propTypes = {
  artistName: PropTypes.string.isRequired,
  sectionId: PropTypes.string.isRequired,
};

export default MusicSection;
