import React, { useState } from 'react';
import "./App.css";
import Header from "./Components/Header";
import Movies from "./Components/Movies";

function App() {
  const [moviesList, setMovies] = useState({});
  const searchDataHandler = (enteredSearch) => {
    setMovies(enteredSearch);
  };

  return (
    <div>
      <Header onSearch={searchDataHandler} />
      <Movies movies={moviesList} />
    </div>
  );
}

export default App;
