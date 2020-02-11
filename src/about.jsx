import React from "react";
import {Link} from "react-router-dom";

const About = () => {
  return (
    <div>
      <Link to = "/">
      <h3>O ovom sajtu</h3>
      </Link>
      <ul>
        <Link to = "/promeniboju">
        <li>Promeni boju</li>
        </Link>
        <Link to = "/counter">
        <li>Brojač</li>
        </Link>
        <Link to = "/listafilmova">
        <li>Dodaj film</li>
        </Link>
        <Link to = "/shopping">
        <li>Shopping</li>
        </Link>
      </ul>
      <h4>Ovde možete pronaći razna isprobavanja raznih funkcionalnosti u Reactu.</h4>
    </div>
  );
};
export default About;
