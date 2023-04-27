import { useState, useEffect } from 'react';
import axios from 'axios';
import apiData from '../API/apiData.json';

const apiKey = apiData[0].apiKey;
const baseUrl = apiData[0].baseUrl;

export default function useSearchMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const searchMovies = async () => {
      if (!query) {
        setMovies([]);
        return;
      }

      setIsLoading(true);
      try {
        const response = await axios.get(
          `${baseUrl}search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false&query=${query}`
        );
        if (response.status === 200) {
          setMovies(response.data.results);
        } else {
          setError('Error searching for movies.');
        }
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    };

    const delayDebounceFn = setTimeout(() => {
      searchMovies();
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  return { movies, isLoading, error };
}
