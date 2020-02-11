import React from 'react';

import './App.css';
import Brojac from './brojac';
import Counter from './counter';
import MovieList from './components/movieList';
import { MovieProvider } from './components/movieContext';
import Shop from './shop';
import About from './about';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



function App() {

  return (
    <Router>
    <MovieProvider>
      <div>
        <About />
        <Route path = "/promeniboju" component = {Brojac} />
        <Route path = "/counter" component = {Counter} />
        <Route path = "/listafilmova" component = {MovieList} />
        <Route path = "/shopping" component = {Shop} />
        

      </div>
    </MovieProvider>
    </Router>
  );
}

export default App;
