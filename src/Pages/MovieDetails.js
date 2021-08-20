import React, { useState, useEffect, useCallback, useReducer } from "react";
import { useParams } from "react-router-dom";
import Box from "../UI/Box";
import ReviewForm from "../Components/ReviewForm";
import LoadingSpinner from "../UI/LoadingSpinner";
import NotFound from "../Img/poster-not-found.jpg";
import StarRating from "../Img/star_rating.png";
import ReactStars from "react-stars";
import "./MovieDetails.css";

const reviewReducer = (state, action) => {
  switch (action.type) {
    case "ADD_REVIEW":
      console.log("running!");
      state = [
        ...state,
        { rate: action.rate, review: action.review, details: action.details },
      ];
      return state;
    default:
      return [];
  }
};

const MovieDetails = () => {
  const [state, dispatchReview] = useReducer(reviewReducer, []);
  const [rating, setRating] = useState(0);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movieDetails, setMovieDetails] = useState({
    error: false,
    classes: "",
    data: null,
  });
  const commentHandler = (comment) => {
    dispatchReview({
      type: "ADD_REVIEW",
      rate: rating,
      review: comment,
      details: movieDetails,
    });
    setRating(0);
    console.log(state);
  };
  const ratingChanged = (newRating) => {
    setRating(newRating);
    console.log(newRating, rating);
  };
  const MovieDetailsHandler = useCallback(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=8f781d70654b5a6f2fa69770d1d115a3&language=en-US
      `
    )
      .then((response) => {
        // if (response.ok) {
        if (response.status !== 204) {
          return response.json();
        } else {
          throw Error(
            `This content has not been obtained. 
              Please check the requested URL or contact the webmaster.`
          );
        }
        // } else {

        // }
      })
      .then((data) => {
        // console.log(Object.keys(data));
        // console.log(Object.keys(data).length);
        if ("success" in data) {
          throw Error(data.status_message);
        } else if (Object.keys(data).length > 0) {
          // console.log(data);
          setMovieDetails({
            error: false,
            classes: "",
            data,
          });
          setIsLoading(false);
        } else {
          throw Error("Your search do not returned any results");
        }
      })
      .catch((error) => {
        setMovieDetails({
          error: true,
          classes: "warning",
          data: error.message,
        });
        setIsLoading(false);
      });
  }, [movieId]);

  useEffect(() => {
    const timer = setTimeout(() => {
      MovieDetailsHandler();
    }, 900);
    return () => clearTimeout(timer);
  }, [MovieDetailsHandler]);

  return (
    <main>
      {isLoading && <LoadingSpinner />}
      {!isLoading && movieDetails.error && (
        <Box className={movieDetails.classes}>{movieDetails.data}</Box>
      )}
      {!isLoading && !movieDetails.error && (
        <div className="box">
          <div className="cover">
            <img
              src={
                `https://image.tmdb.org/t/p/w500${movieDetails.data.poster_path}` ||
                NotFound
              }
              alt="Default cover"
            />
          </div>
          <div className="content">
            <div className="title">
              <h2>{movieDetails.data.title}</h2>
              <h3>({movieDetails.data.tagline})</h3>
            </div>
            <p className="small">
              <span> {movieDetails.data.release_date.split("-")[0]}</span> |
              <span> {movieDetails.data.runtime} min.</span> |
              <span>
                {" "}
                {movieDetails.data.vote_average}
                <img src={StarRating} alt="Movie votes average" />
              </span>
            </p>
            <p className="genres">
              {movieDetails.data.genres
                .map((genre) => {
                  return genre.name;
                })
                .join(", ")}
            </p>
            <p className="overview">
              <span>Overview:</span> {movieDetails.data.overview}
            </p>
            <div className="rate-movie">
              <h3>Rate This Movie</h3>
              <ReactStars
                className="stars"
                count={5}
                onChange={ratingChanged}
                size={48}
                color1={"#d8d8dd"}
                color2={"#ffd700"}
                value={rating}
              />
              <ReviewForm
                onComment={commentHandler}
                placeholder="Add a review"
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default MovieDetails;
