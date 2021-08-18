import Movie from "./Movie";
import Box from "../UI/Box";
import NotFound from "../Img/poster-not-found.jpg";

const Movies = (props) => {
  if (props.movies.error === false && props.movies.data !== null) {
    let movies = [];
    for (const result of props.movies.data.results) {
      if (result.overview !== "") {
        let poster = "";
        if (result.poster_path !== null) {
          poster = `https://image.tmdb.org/t/p/w200${result.poster_path}`;
        } else {
          poster = NotFound;
        }
        let title = result.title ? result.title : "No title available";
        let release = result.release ? result.release : "No release available";
        const movieData = {
          id: result.id,
          title,
          release,
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
    return (
      <main>
        <Box className={props.movies.classes}>{props.movies.data}</Box>
      </main>
    );
  }
};
export default Movies;
