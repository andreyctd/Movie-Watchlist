import { useState, useCallback, useEffect } from 'react';
import './MovieSearch.css';

const MovieSearch = ({ onResults }) => {
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchMovies = useCallback(
    async (searchQuery, page) => {
      if (!searchQuery) return;

      setLoading(true);
      try {
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&s=${searchQuery}&page=${page}`
        );
        const data = await res.json();

        if (data.Response === 'True') {
          onResults(data.Search);
          setTotalResults(parseInt(data.totalResults));
        } else {
          onResults([]);
          setTotalResults(0);
        }
      } catch (err) {
        console.error('Fetch error:', err);
        onResults([]);
      } finally {
        setLoading(false);
      }
    },
    [onResults]
  );

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query) return;
    setCurrentPage(1);
    fetchMovies(query, 1);
  };

  useEffect(() => {
    if (query) fetchMovies(query, currentPage);
  }, [query, currentPage, fetchMovies]);

  const totalPages = Math.ceil(totalResults / 10);

  return (
    <div className="movie-search">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}

      {totalResults > 10 && (
        <div className="pagination">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            ← Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            disabled={currentPage >= totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
};

export default MovieSearch;
