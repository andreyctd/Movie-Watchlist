import { useState } from 'react';

const WatchlistItem = ({ movie, onDelete, onToggle, onUpdateNotes }) => {
  const [note, setNote] = useState(movie.note || '');
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    onUpdateNotes(note);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setNote(movie.note || '');
    setIsEditing(false);
  };

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

      <div className="movie-notes">
        {isEditing ? (
          <>
            <textarea
              placeholder="Add notes..."
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
            <div className="note-buttons">
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          </>
        ) : (
          <>
            <p>{movie.note ? movie.note : 'No note added.'}</p>
            <button onClick={() => setIsEditing(true)}>
              {movie.note ? 'Edit Note' : 'Add Note'}
            </button>
          </>
        )}
      </div>

      <button onClick={onDelete} className="button delete">
        Remove
      </button>
    </div>
  );
};

export default WatchlistItem;