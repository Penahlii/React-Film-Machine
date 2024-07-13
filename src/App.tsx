import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import GlobalStyles from "./styles/GlobalStyles";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
};

export default App;
