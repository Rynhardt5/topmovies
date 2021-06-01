import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Form,
  FormControl,
  InputGroup,
  Button,
} from "react-bootstrap";
import "./FilterBar.css";

const defaultFilterOpts = {
  sortBy: "",
  sortDirection: "DESC",
  limit: 50,
};

const FilterBar = ({ movieList, onFilter, genres }) => {
  const [options, setOptions] = useState(defaultFilterOpts);

  useEffect(() => {
    onFilter(options);
    localStorage.setItem("filterOpts", JSON.stringify(options));
  }, [options]);

  function resetFilter() {
    setOptions(defaultFilterOpts);
  }

  function setFilterOption(param, val) {
    setOptions({ ...options, [param]: val });
  }

  return (
    <>
      <div className="mt-5">
        <h1>Top Movies</h1>
        <div className="filter-bar">
          <Row>
            <Col auto="true">
              <Form.Label htmlFor="filter-title">Filter Title</Form.Label>
              <InputGroup
                onChange={(e) => setFilterOption("title", e.target.value)}
              >
                <FormControl id="filter-title" placeholder="Search" />
              </InputGroup>
            </Col>
            <Col>
              <Form.Label htmlFor="filter-genre">Filter Genre</Form.Label>
              <Form.Control
                onChange={(e) => setFilterOption("genre", e.target.value)}
                as="select"
                id="filter-genre"
                value={options.genre}
              >
                <option value="">(Any gentre)</option>
                {genres}
              </Form.Control>
            </Col>
            <Col>
              <Form.Label htmlFor="sort-column">Sort column</Form.Label>
              <Form.Control
                onChange={(e) => setFilterOption("sortBy", e.target.value)}
                as="select"
                id="sort-column"
                value={options.sortBy}
              >
                <option value="">(None)</option>
                <option value="title">Title</option>
                <option value="year">Year</option>
                <option value="rating">Rating</option>
                <option value="runtimeMins">Runtime</option>
                <option value="votes">Votes</option>
              </Form.Control>
            </Col>
            <Col>
              <Form.Label htmlFor="sort-direction">Sort direction</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setFilterOption("sortDirection", e.target.value)
                }
                as="select"
                id="sort-direction"
                value={options.sortDirection}
              >
                <option value="ASC">ASC</option>
                <option value="DESC">DESC</option>
              </Form.Control>
            </Col>
            <Col>
              <Form.Label htmlFor="row-limit">Row Limit</Form.Label>
              <InputGroup>
                <FormControl
                  onChange={(e) => setFilterOption("limit", e.target.value)}
                  type="number"
                  id="row-limit"
                  min="1"
                  value={options.limit}
                />
              </InputGroup>
            </Col>
            <Col
              style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "flex-end",
              }}
            >
              <Button variant="primary" onClick={resetFilter}>
                Reset filters
              </Button>
            </Col>
          </Row>
        </div>
      </div>
      <hr />
      <i>Showing {movieList.length} movies</i>
    </>
  );
};

export default FilterBar;
