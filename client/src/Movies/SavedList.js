import React from 'react';
import {NavLink} from 'react-router-dom';

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <NavLink to={`/movies/${movie.id}`} activeClassName="saved-movie" key={movie.title}>{movie.title}</NavLink>
    ))}
    <NavLink to="/" activeClassName="home-button">Home</NavLink>
  </div>
);

export default SavedList;
