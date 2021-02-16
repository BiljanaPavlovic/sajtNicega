/** @format */

import React, { useContext, useEffect, useState } from "react";
import Movie from "./movie";
import { MovieContext } from "./movieContext";
import AddMovie from "./addMovie";
import Nav from "./nav";

const MovieList = () => {
  const [movies] = useContext(MovieContext);
  const [search, setSearch] = useState("");
  const [filteredMovie, setFilteredMovie] = useState([]);

  useEffect(() => {
    setFilteredMovie(
      movies.filter((movie) =>
        movie.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, movies]);

  return (
    <div>
      <Nav />
      <input
        type="text"
        placeholder="Search Movies"
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredMovie.map((movie, idx) => (
        <Movie
          name={movie.name}
          price={movie.price}
          key={movie.id}
          {...movies}
        />
      ))}
      {movies.map((movie) => (
        <Movie name={movie.name} price={movie.price} key={movie.id} />
      ))}
      <AddMovie />
    </div>
  );
};

export default MovieList;
