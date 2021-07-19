import "./Movies.css";
import Movie from "./Movie";
import NotFound from "../Img/poster-not-found.jpg";

const Movies = (props) => {
  if (props.movies.results) {
    console.log(props.movies.results);
    let movies = [];
    for (const result of props.movies.results) {
      if (result.overview !== "") {
        let poster = "";
        if (result.poster_path !== null) {
          poster = `https://image.tmdb.org/t/p/w200${result.poster_path}`;
        } else {
          poster = NotFound;
        }
        const movieData = {
          title: result.title,
          release: result.release_date,
          overview: result.overview,
          poster,
        };
        movies.push(movieData);
      }
    }
    return (
      <main>
        {movies.map((movie, index) => (
          <Movie
            key={index}
            id={movie.id}
            title={movie.title}
            release={movie.release}
            overview={movie.overview}
            poster={movie.poster}
          />
        ))}
      </main>
    );
  } else {
    return <main></main>;
  }
};
export default Movies;
