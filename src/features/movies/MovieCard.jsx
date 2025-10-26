import { useEffect, useState } from 'react';
import { useWatchlist } from '../watchlist/WatchlistContext';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  const { watchlist, addMovie, removeMovie, updateMovie } = useWatchlist();
  const [details, setDetails] = useState(null);
  const [isAddingNote, setIsAddingNote] = useState(false);
  const [note, setNote] = useState(movie.note || '');

  const isInWatchlist = watchlist.some((m) => m.imdbID === movie.imdbID);

  // Get the current saved note (if updated externally)
  const savedNote =
    watchlist.find((m) => m.imdbID === movie.imdbID)?.note || '';

  // Fetch extra movie info from OMDb
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

  // Save note to watchlist
  const handleSaveNote = () => {
    updateMovie(movie.imdbID, { note });
    setIsAddingNote(false);
  };

  // Cancel note editing (revert unsaved changes)
  const handleCancelNote = () => {
    setNote(savedNote);
    setIsAddingNote(false);
  };

  return (
    <div className="movie-card">
      <img
        src={movie.Poster !== 'N/A' ? movie.Poster : '/placeholder.jpg'}
        alt={movie.Title}
      />

      <h3>{movie.Title}</h3>
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

      {/* ----- Notes Section ----- */}
      {isInWatchlist && (
        <div className="movie-notes">
          {isAddingNote ? (
            <>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Add your personal note..."
              />
              <div className="note-buttons">
                <button onClick={handleSaveNote}>Save Note</button>
                <button onClick={() => setIsAddingNote(false)}>Cancel</button>
              </div>
            </>
          ) : (
            <>
              {savedNote ? (
                <p className="note-display">
                  <strong>Note:</strong> {savedNote}
                </p>
              ) : (
                <p className="note-empty">No note added yet.</p>
              )}
              <button onClick={() => setIsAddingNote(true)}>
                {savedNote ? 'Edit Note' : 'Add Note'}
              </button>
            </>
          )}
        </div>
      )}

      {/* ----- Watchlist Buttons ----- */}
      <div className="movie-card-buttons">
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