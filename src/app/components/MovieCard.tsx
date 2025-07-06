import React from 'react';

const MovieCard =
  ({ name, year, rating, poster }) => {
    return (
      <div className="movie-card">
        <img src={poster} alt={name} className="movie-poster" />
        <div className="movie-info">
          <h2 className="">Название: {name}</h2>
          <p className="">Год: {year}</p>
          <p className="">IMDb: {rating}</p>
        </div>
        <div className="movie-buttons">
          <button className="movie-card-btn">Подробнее</button>
          <button className="movie-card-btn">В избранное</button>

        </div>
      </div>

    );
  };

export default MovieCard;

