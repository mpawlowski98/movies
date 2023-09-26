import React from 'react';
import useFetchMovies from '../../fetch/fetchMovies';
import css from './Home.module.css';
import { Link } from 'react-router-dom';

export default function Home() {
  const { movies, isLoading, error } = useFetchMovies();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={css.home}>
      <h1 className={css.titleHome}>Popular Movies</h1>
      <ul className={css.moviecontainer}>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link className={css.movie} to={`/movies/${movie.id}`}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
