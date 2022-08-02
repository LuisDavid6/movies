// import logo from './logo.svg';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Movie from './components/Movie/Movie.js';
import Movies from './components/Movies/Movies';
import {NavBar} from "./components/NavBar/NavBar.js"
import { NotFound } from './components/NotFound/NotFound.js';
import Favorites from './components/Favorites/Favorites';

function App() {
  return (
    <div className="App">
      <React.Fragment>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Movies/>}/>
          <Route path='movies/:title' element={<Movies/>} />
          <Route path='movie/:id' element={ <Movie />}/>
          <Route path='favorites' element={ <Favorites />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
        </React.Fragment>

    </div>
  );
}

export default App;
