import { createContext, useContext, useState, useEffect } from 'react';

const WatchlistContext = createContext();

export const WatchlistProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState(() => {
    // Load from localStorage if available
    const saved = localStorage.getItem('watchlist');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
  }, [watchlist]);

  const addMovie = (movie) => {
    if (!watchlist.some((m) => m.imdbID === movie.imdbID)) {
      setWatchlist((prev) => [...prev, { ...movie, note: "" }]);
    }
  };

  const removeMovie = (id) => {
    setWatchlist((prev) => prev.filter((movie) => movie.imdbID !== id));
  };

  const updateMovie = (id, updatedData) => {
    setWatchlist((prev) =>
      prev.map((movie) =>
        movie.imdbID === id ? { ...movie, ...updatedData } : movie
      )
    );
  };

  return (
    <WatchlistContext.Provider
      value={{ watchlist, addMovie, removeMovie, updateMovie }}
    >
      {children}
    </WatchlistContext.Provider>
  );
};

export const useWatchlist = () => useContext(WatchlistContext);
