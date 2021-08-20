import React, { useContext } from "react";
import { ReviewsContext } from "../store/reviews-context";
import { Link } from "react-router-dom";

const MyList = () => {
  const ctx = useContext(ReviewsContext);
  console.log(ctx.reviews);
  console.log("running!");

  // return <div>{ctx.reviews}</div>;
  return (
    <div>
      <p>Lista de películas</p>
      <Link to="/">Buscar Películas</Link>
    </div>
  );
};

export default MyList;
