import { FETCH_SONGS, SET_CURRENT_SONG, TOGGLE_LIKE_SONG } from "./actions";

const initialState = {
  songs: [],
  currentSong: null,
  likedSongs: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SONGS:
      return {
        ...state,
        songs: action.payload,
      };
    case SET_CURRENT_SONG:
      return {
        ...state,
        currentSong: action.payload,
      };
    case TOGGLE_LIKE_SONG:
      const isLiked = state.likedSongs.some((song) => song.id === action.payload.id);
      return {
        ...state,
        likedSongs: isLiked
          ? state.likedSongs.filter((song) => song.id !== action.payload.id)
          : [...state.likedSongs, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
