import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchFilms } from "../../redux/slices/filmsSlice";
import {
  SearchBarContainer,
  SearchInput,
  SearchButton,
} from "./SearchBar.styles";

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (query.trim()) {
      dispatch(fetchFilms(query));
    }
  };

  return (
    <SearchBarContainer>
      <SearchInput
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for films..."
      />
      <SearchButton onClick={handleSearch}>Search</SearchButton>
    </SearchBarContainer>
  );
};

export default SearchBar;
