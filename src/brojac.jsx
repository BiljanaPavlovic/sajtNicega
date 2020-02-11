import React, { useState } from "react";

function Brojac() {
  const [isRed, setRed] = useState(true);
  const [isBlue, setBlue] = useState(true);

  const increment = () => {
    setRed(!isRed);
    setBlue(!isBlue);
  };

  return (
    <div>
      <h1 className={isBlue ? "blue" : "red"}>Hello React</h1>
      <h1 className={isRed ? "red" : "blue"}>Hello world!</h1>
      <button className="dugme" onClick={increment}>
        Promeni
        <br />
        boju
      </button>
<p className={isBlue ? "blue" : "red"}>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
  Odit, a! Illo omnis porro delectus nostrum?
</p>
      <p className={isRed ? "red" : "blue"}>
    
        Esse amet consequat aute magna ad sunt mollit cupidatat. Tempor tempor
        cupidatat aliquip cillum cillum anim ea exercitation.
      </p>
    </div>
  );
}

export default Brojac;
