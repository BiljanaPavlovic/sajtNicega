import React, { useState, useContext } from "react";
import { MovieContext } from "./movieContext";

const AddMovie = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [movies, movielist] = useContext(MovieContext);

  const uptadeName = e => {
    setName(e.target.value);
  };

  const uptadePrice = e => {
    setPrice(e.target.value);
  };

  const addMovie = e => {
    e.preventDefault();
    movielist(prevMovies => [
      ...prevMovies,
      {
        name: name,
        price: price
      }
    ]);
  };

  return (
    <form onSubmit={addMovie}>
      <input
        className="input"
        type="text"
        name="name"
        value={name}
        onChange={uptadeName}
        placeholder="upisi film"
      />
      <br />
      <input
        className="input"
        type="text"
        name="price"
        value={price}
        onChange={uptadePrice}
        placeholder="upisi cenu"
      />
      <br />
      <button className="dugme">submit</button>
    </form>
  );
};
export default AddMovie;
