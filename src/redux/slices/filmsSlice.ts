import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { searchFilms } from "../../api/omdbAPI";

export const fetchFilms = createAsyncThunk(
  "films/fetchFilms",
  async (query: string) => {
    const response = await searchFilms(query);
    return response.data.Search;
  }
);

const filmsSlice = createSlice({
  name: "films",
  initialState: { films: [], status: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilms.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFilms.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.films = action.payload;
      })
      .addCase(fetchFilms.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default filmsSlice.reducer;
