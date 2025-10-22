import React, { useEffect, useState } from "react";
import "./MovieList.css";
//  import Button from "../../shared/Button";
import { useWatchlist } from "../watchlist/WatchlistContext";

/*   const MovieList = ({ movies }) => {
  if (!movies.length) {
    return <p>No results found.</p>;
  }   */

const MovieCard = ({ movie, isInWatchlist, addMovie }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${
          import.meta.env.VITE_OMDB_API_KEY
        }&i=${movie.imdbID}`
      );
      const data = await res.json();
      setDetails(data);
    };

    fetchDetails();
  }, [movie.imdbID]);

  return (
    <div className="movie-card">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.jpg"}
        alt={movie.Title}
      />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>

      {details ? (
        <>
          <p>
            <strong>Genre:</strong> {details.Genre}
          </p>
          <p>
            <strong>IMDb Rating:</strong> {details.imdbRating}
          </p>
          <p>
            <strong>Runtime:</strong> {details.Runtime}
          </p>
        </>
      ) : (
        <p>Loading details...</p>
      )}

      <button
        onClick={() => addMovie(movie)}
        disabled={isInWatchlist}
        className={isInWatchlist ? "in-watchlist" : ""}
      >
        {isInWatchlist ? "In Watchlist" : "Add to Watchlist"}
      </button>
    </div>
  );
};

const MovieList = ({ movies }) => {
  const { watchlist, addMovie } = useWatchlist();

  if (!movies.length) {
    return <p>No results found.</p>;
  }

  return (
    /*   <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.imdbID} className="movie-card">
          <img
            src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.jpg"}
            alt={movie.Title}
          />
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
          
          <button onClick={() => addMovie(movie)}>Add to Watchlist</button>
        </div>
      ))}
    </div >   */
        <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          addMovie={addMovie}
          isInWatchlist={watchlist.some((m) => m.imdbID === movie.imdbID)}
        />
      ))}
    </div>
  );
};

export default MovieList;
