import axios from 'axios';
import apiData from '../API/apiData.json';
import { useState, useEffect } from 'react';

const baseUrl = apiData.baseUrl;
const apiKey = apiData.apiKey;

export const useFetchMoviesActors = () => {
  const [movieActors, setMovieActors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchActors = async () => {
      if (!movieId) {
        setMovieActors([]);
        return;
      }
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${baseUrl}movie/${movieId}/credits?api_key=${apiKey}&language=en-US`
        );
        if (response.status === 200) {
          setMovieActors(response.data.cast);
        } else {
          setError(`Error fetch actors`);
        }
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    };

    fetchActors();
  }, [movieId]);

  return [movieActors, isLoading, error];
};
