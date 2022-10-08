import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
// import { Router } from 'express';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5001/api/movies') // Study this endpoint with Postman
        .then(response => {
          setMovieList(response.data)
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    if (saved.find(element=>element.id===id)){
      const idxResult =saved.findIndex(element=>element.id===id)
      saved.splice(idxResult,1)
      setSaved([...saved])
    } else {
      const result =movieList.find(element=>element.id===id)
      setSaved([...saved, result])
    }
    // This is stretch. Prevent the same movie from being "saved" more than once
  };
  return (
    <div>

    <Router>
    <SavedList list={saved} />
      <Switch>
        <Route exact path="/"><MovieList movies={movieList}/></Route>
        <Route path="/movies/:id">{<Movie saving={addToSavedList}/>}</Route>

      </Switch>
    </Router>
    </div>


    
  );
}
