import { useState, useEffect } from 'react';
import axios from 'axios';
import apiData from '../API/apiData.json';

const apiKey = apiData[0].apiKey;
const baseUrl = apiData[0].baseUrl;

export default function useMovieDetails(movieId) {
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      if (!movieId) {
        setMovieDetails(null);
        return;
      }

      setIsLoading(true);
      try {
        const response = await axios.get(
          `${baseUrl}movie/${movieId}?api_key=${apiKey}&language=en-US`
        );
        if (response.status === 200) {
          setMovieDetails(response.data);
        } else {
          setError('Error fetching movie details.');
        }
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    };

    fetchMovieDetails();
  }, [movieId]);

  return { movieDetails, isLoading, error };
}
