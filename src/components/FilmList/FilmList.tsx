import React from "react";
import { useSelector } from "react-redux";
import FilmCard from "../FilmCard/FilmCard";
import { RootState } from "../../redux/store";
import { ListContainer } from "./FilmList.styles";

const FilmList: React.FC = () => {
  const films = useSelector((state: RootState) => state.films.films);

  return (
    <ListContainer>
      {films.map((film) => (
        <FilmCard key={film.imdbID} film={film} />
      ))}
    </ListContainer>
  );
};

export default FilmList;
