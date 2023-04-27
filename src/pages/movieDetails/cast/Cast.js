import React from 'react';
import { useParams } from 'react-router-dom';
import useMovieActors from '../../../fetch/fetchMovieActors';
import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const { actors, isLoading, error } = useMovieActors(movieId);
  const orginalId = new Set();

  const handleSubmit = actor => {
    if (orginalId.has(actor.id)) {
      actor.id = Math.floor(Math.random() * 1000000);
    }
    orginalId.add(actor.id);
    return actor;
  };

  const processedActors = actors && actors.map(handleSubmit);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!processedActors || processedActors.length === 0) {
    return <div>No actors found..</div>;
  }

  return (
    <>
      <h1 className={css.header}>Actors</h1>
      <ul>
        {processedActors.map(actor => (
          <li key={actor.id}>
            {actor.name} as {actor.character}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cast;
