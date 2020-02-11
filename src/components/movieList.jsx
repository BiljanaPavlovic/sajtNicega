import React,  { useState, useContext } from "react";
import Movie from "./movie";
import { MovieContext } from "./movieContext";
import AddMovie from "./addMovie";
import Nav from "./nav";


const MovieList = () => {
    const [movies, movielist] = useContext(MovieContext)

return (
    <div>
<Nav />
{movies.map(movie => (
<Movie name={movie.name} price={movie.price} key= {movie.id}/>
))}
<AddMovie />
</div>
);
}

export default MovieList