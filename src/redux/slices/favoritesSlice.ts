import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: { films: [] },
  reducers: {
    addFavorite: (state, action) => {
      state.films.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.films = state.films.filter(
        (film) => film.imdbID !== action.payload.imdbID
      );
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
