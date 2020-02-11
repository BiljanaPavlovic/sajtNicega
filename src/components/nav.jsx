import React, {useContext} from "react";
import { MovieContext } from "./movieContext";

const Nav = () => {
  const [movies, movieList]= useContext(MovieContext)
  return (
    <div>
      <h3 className = 'name'>Biljana Pavlovic</h3>
  <p className = 'listaFilmova'>Lista filmova/serija: {movies.length}</p>
    </div>
  );
};

export default Nav;
