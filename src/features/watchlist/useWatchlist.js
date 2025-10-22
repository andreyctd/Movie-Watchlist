import { useState, useEffect } from "react";

const STORAGE_KEY = "movie_watchlist";

export function useWatchlist() {
  const [watchlist, setWatchlist] = useState([]);

  // Load watchlist from localStorage on first load
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setWatchlist(JSON.parse(stored));
    }
  }, []);

  // Sync to localStorage whenever watchlist changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(watchlist));
  }, [watchlist]);

  /*   const addMovie = (movie) => {
    if (watchlist.some((item) => item.imdbID === movie.imdbID)) return;
    setWatchlist([...watchlist, { ...movie, watched: false, notes: "" }]);
  };   */

  // Add to watchlist (if not already there)
  const addMovie = (movie) => {
    if (!watchlist.some((m) => m.imdbID === movie.imdbID)) {
      setWatchlist([...watchlist, movie]);
    }
  };

  const removeMovie = (id) => {
    setWatchlist(watchlist.filter((m) => m.imdbID !== id));
  };

  const toggleWatched = (id) => {
    setWatchlist(
      watchlist.map((m) =>
        m.imdbID === id ? { ...m, watched: !m.watched } : m
      )
    );
  };

  const updateNotes = (id, notes) => {
    setWatchlist(watchlist.map((m) => (m.imdbID === id ? { ...m, notes } : m)));
  };

  return {
    watchlist,
    addMovie,
    removeMovie,
    toggleWatched,
    updateNotes,
  };
}
