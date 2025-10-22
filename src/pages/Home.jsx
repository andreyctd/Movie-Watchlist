import { useState } from "react";
import MovieSearch from "../features/movies/MovieSearch";
import MovieList from "../features/movies/MovieList";

const Home = () => {
  const [movies, setMovies] = useState([]);

  return (
    <div className="home">
      <h1>Search Movies</h1>
      <MovieSearch onResults={setMovies} />
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
