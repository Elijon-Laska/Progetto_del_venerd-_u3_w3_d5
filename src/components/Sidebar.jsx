import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";
import logo from "../assets/logo/logo.png";

const Sidebar = () => {
  const likedSongs = useSelector((state) => state.likedSongs);

  const signUpButtonStyle = {
    backgroundColor: "white",
    color: "black",
    border: "1px solid white",
    borderRadius: "20px",
    width: "180px",
    marginBottom: "20px",
  };

  const loginButtonStyle = {
    backgroundColor: "black",
    color: "white",
    border: "1px solid white",
    borderRadius: "20px",
    width: "180px",
    marginBottom: "20px",
  };

  return (
    <aside className="col col-2">
      <nav className="navbar navbar-expand-md fixed-left justify-content-between" id="sidebar">
        <div className="container flex-column align-items-start">
          <a className="navbar-brand" href="index.html">
            <img src={logo} alt="Spotify Logo" width="131" height="40" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <ul style={{ padding: 0 }}>
                <li>
                  <a className="nav-item nav-link d-flex align-items-center" href="index.html">
                    <i className="bi bi-house-door-fill"></i>&nbsp; Home
                  </a>
                </li>
                <li>
                  <a className="nav-item nav-link d-flex align-items-center" href="#">
                    <i className="bi bi-book-fill"></i>&nbsp; Your Library
                  </a>
                </li>
                <li>
                  <SearchBar />
                </li>
              </ul>
              <ul style={{ padding: 0 }}>
                {likedSongs.map((song) => (
                  <li key={song.id} className="nav-item nav-link d-flex align-items-center">
                    <img src={song.album.cover_small} alt={song.title} style={{ width: "30px", marginRight: "10px" }} />
                    {song.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-auto">
          <div className="nav-btn">
            <button className="btn signup-btn" type="button" style={signUpButtonStyle}>
              Sign Up
            </button>
            <button className="btn login-btn" type="button" style={loginButtonStyle}>
              Login
            </button>
          </div>
          <div className="footer-links">
            <a href="#">Cookie Policy</a> | <a href="#">Privacy</a>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
