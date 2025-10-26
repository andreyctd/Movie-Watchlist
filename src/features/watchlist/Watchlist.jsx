import { useWatchlist } from '../features/watchlist/useWatchlist';
import WatchlistItem from '../features/watchlist/WatchlistItem';

const Watchlist = () => {
  const { watchlist, removeMovie, toggleWatched, updateNotes } = useWatchlist();

  if (watchlist.length === 0) return <p>Your watchlist is empty.</p>;

  return (
    <div className="watchlist">
      <h1>My Watchlist</h1>
      <div className="movie-grid">
        {watchlist.map((movie) => (
          <WatchlistItem
            key={movie.imdbID}
            movie={movie}
            onDelete={() => removeMovie(movie.imdbID)}
            onToggle={() =>
              toggleWatched(movie.imdbID, { watched: !movie.watched })
            }
            onUpdateNotes={(note) => updateNotes(movie.imdbID, note)}
          />
        ))}
      </div>
    </div>
  );
};

export default Watchlist;
