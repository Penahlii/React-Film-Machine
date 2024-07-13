import { configureStore } from "@reduxjs/toolkit";
import filmsReducer from "./slices/filmsSlice";
import favoritesReducer from "./slices/favoritesSlice";

const store = configureStore({
  reducer: {
    films: filmsReducer,
    favorites: favoritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
