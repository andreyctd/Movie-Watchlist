import React, { createContext, useContext, useEffect, useState } from "react";

const STORAGE_KEY = "movie_watchlist";

const WatchlistContext = createContext();

export const WatchlistProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setWatchlist(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(watchlist));
  }, [watchlist]);

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

  return (
    <WatchlistContext.Provider
      value={{ watchlist, addMovie, removeMovie, toggleWatched, updateNotes }}
    >
      {children}
    </WatchlistContext.Provider>
  );
};

  export const useWatchlist = () => {
  return useContext(WatchlistContext);
};