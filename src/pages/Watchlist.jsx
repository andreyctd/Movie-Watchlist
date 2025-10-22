import React from "react";
import "./Watchlist.css";
import { useWatchlist } from "../features/watchlist/WatchlistContext";

const Watchlist = () => {
  const { watchlist, removeMovie } = useWatchlist();
  
  if (watchlist.length === 0) {
    return <p>Your watchlist is empty.</p>;
  }

  return (
    <div className="watchlist-page">
      <h1>My Watchlist</h1>
      {/* Show saved movies here */}
      <div className="movie-list">
        {watchlist.map((movie) => (
          <div className="movie-card" key={movie.imdbID}>
            <img
              src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.jpg"}
              alt={movie.Title}
            />
            <div className="movie-info">
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
              <button onClick={() => removeMovie(movie.imdbID)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Watchlist;
