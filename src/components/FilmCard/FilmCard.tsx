import React from "react";
import { useDispatch } from "react-redux";
import { addFavorite } from "../../redux/slices/favoritesSlice";
import { Card, CardImage, CardTitle, CardButton } from "./FilmCard.styles";

type FilmCardProps = {
  film: {
    imdbID: string;
    Title: string;
    Poster: string;
  };
};

const FilmCard: React.FC<FilmCardProps> = ({ film }) => {
  const dispatch = useDispatch();

  const handleAddFavorite = () => {
    dispatch(addFavorite(film));
  };

  return (
    <Card>
      <CardImage src={film.Poster} alt={film.Title} />
      <CardTitle>{film.Title}</CardTitle>
      <CardButton onClick={handleAddFavorite}>Add to Favorites</CardButton>
    </Card>
  );
};

export default FilmCard;
