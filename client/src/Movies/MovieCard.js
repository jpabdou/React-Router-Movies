import React, {useState} from 'react';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';

export default function MovieCard (props) {
  const {movie} = props;
  const match = useRouteMatch()
  const [card] = useState(match.path.includes("movies/:id"))



  return(
    <div className="save-wrapper">
      
      <div className="movie-card">
        <h2>{movie.title}</h2>
        <div className="movie-director">
          Director: <em>{movie.director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{movie.metascore}</strong>
        </div>
        {card ?  <Actors actors={movie.stars} saving={props.saving}/>: null}
      </div>
      
    </div>
  );
}

function Actors(props) {
  return(
    <div>
      <h3>Actors</h3>
      {props.actors.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
        <div onClick={props.saving} className="save-button">Save</div>
    </div>
  )
}
