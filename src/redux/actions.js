export const FETCH_DATA = "FETCH_DATA";

export const fetchData = (data) => ({
  type: FETCH_DATA,
  payload: data,
});

export const FETCH_SONGS = "FETCH_SONGS";
export const SET_CURRENT_SONG = "SET_CURRENT_SONG";
export const TOGGLE_LIKE_SONG = "TOGGLE_LIKE_SONG";

export const fetchSongs = (songs) => ({
  type: FETCH_SONGS,
  payload: songs,
});

export const setCurrentSong = (song) => ({
  type: SET_CURRENT_SONG,
  payload: song,
});

export const toggleLikeSong = (songId) => ({
  type: TOGGLE_LIKE_SONG,
  payload: songId,
});
