import React from 'react';
import { Link,Router, Route,Switch } from 'react-router-dom/cjs/react-router-dom.min';
import MovieCard from './MovieCard';

export default function MovieList(props) {
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <Link key={movie.id} style={{textDecoration:"none",color:"black"}} to={`/movies/${movie.id}`}>
        <MovieCard movie={movie} />
        </Link>
      ))}


    </div>
  );
}
