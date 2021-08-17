import { Link } from "react-router-dom";
import "./Movie.css";

const Movie = (props) => {
  return (
    <div className="movie">
      <Link to={`movie-details/${props.id}`}>
        <div className="movieCover">
          <img src={props.poster} alt="Default cover" />
        </div>
      </Link>
      <div className="movieDetails">
        <div className="title">
          <strong>
            Title:
            <em> {props.title}</em>
          </strong>
        </div>
        <div className="releaseDate">
          <strong>Release Date: </strong>
          <em>{props.release}</em>
        </div>
        <div className="overview">
          <strong>Overview: </strong>
          {props.overview}
        </div>
      </div>
    </div>
  );
};

export default Movie;
