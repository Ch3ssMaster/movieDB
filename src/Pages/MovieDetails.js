import { useState } from "react";
import LoadingSpinner from "../UI/LoadingSpinner";
import "../Components/Movie.css";

const MovieDetails = () => {
  const [isLoading, setIsLoading] = useState(true);
  if (isLoading) {
    return <LoadingSpinner />;
  }
  return <div className="movie"></div>;
};

export default MovieDetails;
