import axios from 'axios';
import apiData from '../API/apiData.json';
import { useState, useEffect } from 'react';

const baseUrl = apiData.baseUrl;
const apiKey = apiData.apiKey;

export const useFetchMoviesDetails = () => {
  const [details, setDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      if (!movieId) {
        setDetails(null);
        return;
      }
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${baseUrl}movie/${movieId}?api_key=${apiKey}&language=en-US`
        );
        if (response.statis === 200) {
          setDetails(response.data);
        } else {
          setError(`Error fetch details`);
        }
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    };

    fetchDetails();
  }, [movieId]);

  return [details, isLoading, error];
};
