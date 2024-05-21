import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ title, movies, onAddToWatchList, onAddToWatchedList }) => {
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

  return (
    <div className="movie-list">
      <h2>{title}</h2>
      <div className="movie-items">
        {movies.map(movie => (
          <div className="movie-item" key={movie.id}>
            <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} className="movie-poster" />
            <div className="movie-details">
              <h3>{movie.title}</h3>
            </div>
            <div className="movie-actions">
              {onAddToWatchList && <button onClick={() => onAddToWatchList(movie)}>Add to Watch List</button>}
              {onAddToWatchedList && <button onClick={() => onAddToWatchedList(movie)}>Mark as Watched</button>}
              <Link to={`/movie/${movie.id}`}>
                <button>Movie Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
