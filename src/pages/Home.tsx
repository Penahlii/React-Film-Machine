import React from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import FilmList from "../components/FilmList/FilmList";

const Home: React.FC = () => {
  return (
    <div>
      <SearchBar />
      <FilmList />
    </div>
  );
};

export default Home;
