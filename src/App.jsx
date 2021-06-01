import { useEffect, useState } from "react";
import axios from "axios";
import _ from "lodash";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieIndex from "./pages/MovieIndex";
import FilterBar from "./components/FilterBar";

import { Container } from "react-bootstrap";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://6049e293fb5dcc001796aba6.mockapi.io/movies"
        );

        setMovieList(response.data);
        setFilteredList(response.data);

        setLoaded(true);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  function generateGenresOpts(movieList) {
    const genresMap = {};

    movieList.forEach((movie) => {
      movie.genres.forEach((genre) => {
        genresMap[genre] = genresMap[genre] + 1 || 1;
      });
    });

    const options = Object.keys(genresMap).map(function (genre) {
      return <option value={genre}>{`${genre} (${genresMap[genre]})`}</option>;
    });

    return options;
  }

  // if filterbar is changed -> tiggers funtion with params and filters data
  function onFilterHandler(opts) {
    let filtered = movieList;

    console.log(opts);
    console.log(filtered);

    // Filters by title name
    if (opts.title && opts.title !== "") {
      const re = new RegExp(opts.title, "gi");
      filtered = filtered.filter((movie) => re.test(movie.title));
    }

    // Filter by genre
    if (opts.genre && opts.genre !== "") {
      filtered = filtered.filter((movie) => movie.genres.includes(opts.genre));
    }

    // Sort by column
    if (opts.sortBy && opts.sortBy !== "") {
      filtered = _.orderBy(
        filtered,
        [opts.sortBy],
        [opts.sortDirection.toLowerCase()]
      );
    }

    // Add limit param and return results
    setFilteredList(filtered.slice(0, opts.limit));
  }

  return (
    <Container>
      <FilterBar
        movieList={filteredList}
        genres={generateGenresOpts(movieList)}
        onFilter={onFilterHandler}
      />
      <MovieIndex movieList={filteredList} loaded={loaded} />
    </Container>
  );
}

export default App;
