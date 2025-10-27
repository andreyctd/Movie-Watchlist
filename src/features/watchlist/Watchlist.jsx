import React from 'react';
import { useWatchlist } from '../features/watchlist/WatchlistContext';
import WatchlistItem from '../features/watchlist/WatchlistItem';
import './Watchlist.css';

const Watchlist = () => {
  const { watchlist, removeMovie, toggleWatched, updateMovie } = useWatchlist();

  if (watchlist.length === 0) return <p>Your watchlist is empty.</p>;

  return (
    <div className="watchlist-page">
      <h1>My Watchlist</h1>
      <div className="movie-list">
        {watchlist.map((movie) => (
          <WatchlistItem
            key={movie.imdbID}
            movie={movie}
            onDelete={() => removeMovie(movie.imdbID)}
            onToggle={() => toggleWatched(movie.imdbID)}
            onUpdateNotes={(note) => updateMovie(movie.imdbID, { note })}
          />
        ))}
      </div>
    </div>
  );
};

export default Watchlist;