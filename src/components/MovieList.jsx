import React from "react";
import MovieItem from "./MovieItem";
import { Table, Spinner } from "react-bootstrap";

const MovieList = ({ list, loaded }) => {
  const renderList = () => {
    if (loaded && list.length === 0) {
      return (
        <tr>
          <td align="center" colSpan="7">
            <div className="align-items-center mt-3 mb-3">
              <p>No records match your search.</p>
            </div>
          </td>
        </tr>
      );
    }

    return list.length === 0 && !loaded ? (
      <tr>
        <td align="center" colSpan="7">
          <div className="align-items-center mt-5 mb-5">
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
            <p className="mt-2">Loading data...</p>
          </div>
        </td>
      </tr>
    ) : (
      list.map((movie) => <MovieItem key={movie.id} movie={movie} />)
    );
  };

  return (
    <Table hover>
      <thead>
        <tr>
          <th>Image</th>
          <th>Title</th>
          <th>Year</th>
          <th>Rating</th>
          <th>Runtime</th>
          <th>Votes</th>
          <th>Genres</th>
        </tr>
      </thead>
      <tbody>{renderList()}</tbody>
    </Table>
  );
};

export default MovieList;
