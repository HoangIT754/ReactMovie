import React from 'react';
import MovieList from './MovieList';

const Home = ({ movies, watchList, watchedList, addToWatchList, addToWatchedList }) => {
  return (
    <div className="home">
      <MovieList title="Movies" movies={movies} onAddToWatchList={addToWatchList} />
      <MovieList title="Watch List" movies={watchList} onAddToWatchedList={addToWatchedList} />
      <MovieList title="Watched List" movies={watchedList} />
    </div>
  );
};

export default Home;
