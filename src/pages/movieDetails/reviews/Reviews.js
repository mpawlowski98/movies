import React from 'react';
import { useParams } from 'react-router-dom';
import fetchMovieReviews from 'fetch/fetchMovieReviews';
import css from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const { reviews, isLoading, error } = fetchMovieReviews(movieId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!reviews || reviews.length === 0) {
    return <div>No reviews found for this movie.</div>;
  }

  return (
    <>
      <h1 className={css.header}>Reviews</h1>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Reviews;
