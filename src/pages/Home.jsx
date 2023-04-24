import { useFetchMovies } from 'hooks/fetchMovies';
import react from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const { movies, isLoading, error } = useFetchMovies();

  if (isLoading) {
    return <div>Loading....</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Popular Movies</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
