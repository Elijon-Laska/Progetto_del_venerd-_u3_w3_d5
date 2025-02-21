import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSongs } from "../redux/actions";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`);
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

  return (
    <form onSubmit={handleSearch}>
      <div className="input-group mt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          aria-label="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary btn-sm h-100" type="submit">
            GO
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
