import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router";
import "./App.css";
import Header from "./Components/Header";
import Movies from "./Components/Movies";
import MovieDetails from "./Pages/MovieDetails";

function App() {
  const [moviesList, setMovies] = useState({
    error: true,
    classes: "info",
    data: "Enter your search terms and press the search button",
  });
  const searchDataHandler = (enteredSearch) => {
    if (!enteredSearch) {
      setMovies({
        error: true,
        classes: "warning",
        data: "You need to enter at least 3 characters to search",
      });
    } else {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=8f781d70654b5a6f2fa69770d1d115a3&query=${enteredSearch}`
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw Error(response.statusText);
          }
        })
        .then((data) => {
          if (data.results.length > 0) {
            setMovies({
              error: false,
              classes: "",
              data,
            });
          } else {
            throw Error("Your search do not returned any results");
          }
        })
        .catch((error) => {
          setMovies({
            error: true,
            classes: "warning",
            data: error.message,
          });
        });
    }
  };

  return (
    <Switch>
      <Redirect exact from="/" to="/search" />
      <Route path="/search">
        <Header onSearch={searchDataHandler} />
        <Movies movies={moviesList} />
      </Route>
      <Route path="/movie-details/:movieId">
        <MovieDetails />
      </Route>
    </Switch>
  );
}

export default App;
