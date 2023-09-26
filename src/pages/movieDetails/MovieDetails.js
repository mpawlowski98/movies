import React, { lazy, Suspense } from 'react';
import useMoviesDetails from 'fetch/fetchMovieDetails';
import { useParams, useNavigate, Routes, Route } from 'react-router-dom';
import apiInfo from 'API/apiData.json';
import css from './MovieDetails.module.css';

const Cast = lazy(() => import('./cast/Cast'));
const Reviews = lazy(() => import('./reviews/Reviews'));

const MovieDetails = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const { movieDetails, isLoading, error } = useMoviesDetails(movieId);

  const handleClick = view => {
    navigate(`/movies/${movieId}/${view}`);
  };

  if (isLoading) {
    return <div className={css.container}>Loading...</div>;
  }

  if (error) {
    return <div className={css.container}>Error: {error}</div>;
  }

  if (!movieDetails) {
    return <div className={css.container}>Select a movie to view details.</div>;
  }

  return (
    <div className={css.container}>
      <div className={css.container}>
        <h1 className={css.movietitle}>{movieDetails.title}</h1>
        <img
          src={`${apiInfo[0].posterPath}${movieDetails.poster_path}`}
          alt={movieDetails.title}
        />
        <div className={css.infomoviecontainer}>
          <p className={css.infomovie}>
            Release Date: {movieDetails.release_date}
          </p>
          <p className={css.infomoviedwo}>Overview: {movieDetails.overview}</p>
          <p className={css.infomovie}>
            Vote Average: {movieDetails.vote_average}
          </p>
        </div>
      </div>
      <div>
        <button className={css.buttonmovie} onClick={() => handleClick('cast')}>
          Cast
        </button>
        <button
          className={css.buttonmovie}
          onClick={() => handleClick('reviews')}
        >
          Reviews
        </button>
      </div>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="cast" element={<Cast movieId={movieId} />} />
            <Route path="reviews" element={<Reviews movieId={movieId} />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default MovieDetails;
