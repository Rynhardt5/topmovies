import React from "react";
import { Table } from "react-bootstrap";
import { genreFormatter } from "../utils/genreFormatter";

const MovieItem = ({ movie }) => {
  return (
    <tr>
      <td>
        <img src={movie.imageUrl} alt={movie.title} />
      </td>
      <td>
        <a href={movie.url}>{movie.title}</a>
        <p>{movie.description}</p>
      </td>
      <td>{movie.year}</td>
      <td>{movie.rating}</td>
      <td>{`${movie.runtimeMins} min`}</td>
      <td>{movie.votes.toLocaleString()}</td>
      <td>{genreFormatter(movie.genres)}</td>
    </tr>
  );
};

export default MovieItem;
