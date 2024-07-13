import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import FilmCard from "../components/FilmCard/FilmCard";

import { ListContainer } from "../components/FilmList/FilmList.styles";

const Favorites: React.FC = () => {
  const favoriteFilms = useSelector(
    (state: RootState) => state.favorites.films
  );

  return (
    <ListContainer>
      {favoriteFilms.map((film) => (
        <FilmCard key={film.imdbID} film={film} />
      ))}
    </ListContainer>
  );
};

export default Favorites;
