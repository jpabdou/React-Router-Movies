import React from 'react';
import { NavLink, Link } from 'react-router-dom/cjs/react-router-dom.min';


export default function SavedList(props) {
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <NavLink key={movie.id}     style={isActive => ({
    color: isActive ? "orange" : "black"
  })} to={`/movies/${movie.id}`}>
        <span className="saved-movie">{movie.title}</span>

        </NavLink>
      ))}
      <div className="home-button">
      <Link to="/">Home</Link>

      </div>
    </div>
  );
}
