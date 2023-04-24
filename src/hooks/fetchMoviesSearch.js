import axios from 'axios';
import apiData from '../API/apiData.json';
import { useState, useEffect } from 'react';

const baseUrl = apiData.baseUrl;
const apiKey = apiData.apiKey;

export const useFetchSearchMovies = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSearch = async () => {
      if (!query) {
        setSearchMovies([]);
        return;
      }
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${baseUrl}search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false&query=${query}`
        );
        if (response.status === 200) {
          setSearchMovies(response.data.results);
        } else {
          setError(`Error fetch actors`);
        }
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    };

    fetchSearch();
  }, [query]);

  return [searchMovies, isLoading, error];
};
