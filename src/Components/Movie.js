import "./Movie.css";


const Movie = (props) => {
  return (
    <div className="movie">
      <div className="movieCover">
        <img src={props.poster} alt="Default cover" />
      </div>
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
