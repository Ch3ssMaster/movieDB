import { Link } from "react-router-dom";
import classes from "./Movie.module.css";

const Movie = (props) => {
  return (
    <div className={classes.movie}>
      <Link to={`/movie-details/${props.id}`}>
        <div className={classes.movieCover}>
          <img src={props.poster} alt="Default cover" />
        </div>
      </Link>
      <div className={classes.movieDetails}>
        <div className={classes.title}>
          <strong>
            Title:
            <em> {props.title}</em>
          </strong>
        </div>
        <div className={classes.releaseDate}>
          <strong>Release Date: </strong>
          <em>{props.release}</em>
        </div>
        <div className={classes.overview}>
          <strong>Overview: </strong>
          {props.overview}
        </div>
      </div>
    </div>
  );
};

export default Movie;
