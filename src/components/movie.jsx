import React, { useState } from "react";

const Movie = ({ name, price }) => {
  

  return (
    <div>
      <h3 className = 'movie'>{name}</h3>
      <p className = 'moviePrice' >{price}</p>
    </div>
  );
};
export default Movie;
