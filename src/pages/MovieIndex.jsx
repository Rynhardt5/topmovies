import React, { useEffect, useState } from "react";
import MovieList from "../components/MovieList";

// Need to fetch data from api

const MovieIndex = ({ movieList, loaded }) => {
  return (
    <div className="mt-5 mb-5">
      <MovieList list={movieList} loaded={loaded} />
    </div>
  );
};

export default MovieIndex;
