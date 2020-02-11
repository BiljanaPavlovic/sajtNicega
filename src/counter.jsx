import React, { useState } from "react";

const Counter = () => {
  const [brojac, setbrojac] = useState(0);

  const dodaj = () => {
    setbrojac(brojac + 1);
  };
  return (
    <div>
      <h3>Dodaj broj!</h3>
        <img className = 'slika' alt = 'broj' src = 'https://www.reactiongifs.us/wp-content/uploads/2016/01/wake_up_futurama.gif'/>
      <h3>{brojac}</h3>
      <button className = 'dugme' onClick={dodaj}> Broj</button>
    </div>
  );
};

export default Counter;
