import { useParams } from "react-router-dom";
const MovieDetails = () => {
  let { id } = useParams();
  console.log(id);
  return <main></main>;
};

export default MovieDetails;
