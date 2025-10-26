import { useState } from 'react';

const WatchlistItem = ({ movie, onDelete, onToggle, onUpdateNotes }) => {
  const [note, setNote] = useState(movie.note || '');

  return (
    <div className="movie-card">
      <img
        src={movie.Poster !== 'N/A' ? movie.Poster : '/placeholder.jpg'}
        alt={movie.Title}
      />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>

      <button onClick={onToggle}>
        {movie.watched ? 'Mark Unwatched' : 'Mark Watched'}
      </button>

      <textarea
        placeholder="Add notes..."
        value={note}
        onChange={(e) => {
          setNote(e.target.value);
          onUpdateNotes(e.target.value);
        }}
      ></textarea>

      <button onClick={onDelete} className="button delete">
        Remove
      </button>
    </div>
  );
};

export default WatchlistItem;
