import axios from "axios";

const API_KEY = "YOUR API KEY";

const omdbAPI = axios.create({
  baseURL: "http://www.omdbapi.com",
});

export const searchFilms = (query: string) =>
  omdbAPI.get(`/?apikey=${API_KEY}&s=${query}`);

export const getFilmDetails = (id: string) =>
  omdbAPI.get(`/?apikey=${API_KEY}&i=${id}`);
