import { useState, useEffect } from 'react';
import axios from 'axios';
import apiData from '../API/apiData.json';

const apiKey = apiData[0].apiKey;
const baseUrl = apiData[0].baseUrl;

export default function useMovieReviews(movieId) {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      if (!movieId) {
        setReviews([]);
        return;
      }

      setIsLoading(true);
      try {
        const response = await axios.get(
          `${baseUrl}movie/${movieId}/reviews?api_key=${apiKey}&language=en-US&page=1`
        );
        if (response.status === 200) {
          setReviews(response.data.results);
        } else {
          setError('Error fetching movie reviews.');
        }
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    };

    fetchMovieReviews();
  }, [movieId]);

  return { reviews, isLoading, error };
}
