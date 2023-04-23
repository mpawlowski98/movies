import axios from 'axios';
import apiData from '../API/apiData.json';
import { useState, useEffect } from 'react';

const baseUrl = apiData.baseUrl;
const apiKey = apiData.apiKey;

export const useFetchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${baseUrl}/trending/movie/day?api_key=${apiKey}`
        );
        if (response.status === 200) {
          setMovies(response.data.results);
        } else {
          setError('Error fetching movies.');
        }
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    };

    fetchMovies();
  }, []);

  return { movies, isLoading, error };
};
