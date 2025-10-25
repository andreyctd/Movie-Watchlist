import MovieCard from './MovieCard';
import './MovieList.css';

const MovieList = ({ movies }) => {
  if (!movies.length) return <p>No results found.</p>;

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
