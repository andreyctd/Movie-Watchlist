import { useEffect, useState } from 'react';
import { useWatchlist } from '../watchlist/WatchlistContext';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  const { watchlist, addMovie, removeMovie, updateMovie } = useWatchlist();
  const [details, setDetails] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(movie.Title);

  const isInWatchlist = watchlist.some((m) => m.imdbID === movie.imdbID);

  useEffect(() => {
    const fetchDetails = async () => {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&i=${movie.imdbID}`
      );
      const data = await res.json();
      setDetails(data);
    };

    fetchDetails();
  }, [movie.imdbID]);

  const handleSave = () => {
    updateMovie(movie.imdbID, { Title: editedTitle });
    setIsEditing(false);
  };

  return (
    <div className="movie-card">
      <img
        src={movie.Poster !== 'N/A' ? movie.Poster : '/placeholder.jpg'}
        alt={movie.Title}
      />

      {isEditing ? (
        <input
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
        />
      ) : (
        <h3>{movie.Title}</h3>
      )}

      <p>{movie.Year}</p>

      {details && (
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
      )}

      <div className="movie-card-buttons">
        {isEditing ? (
          <>
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}

        {isInWatchlist ? (
          <button onClick={() => removeMovie(movie.imdbID)}>Remove</button>
        ) : (
          <button onClick={() => addMovie(movie)}>Add to Watchlist</button>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
