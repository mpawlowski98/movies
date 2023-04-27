import { useState, useEffect } from 'react';
import axios from 'axios';
import apiData from '../API/apiData.json';

const apiKey = apiData[0].apiKey;
const baseUrl = apiData[0].baseUrl;

export default function useMovieActors(movieId) {
  const [actors, setActors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieActors = async () => {
      if (!movieId) {
        setActors([]);
        return;
      }

      setIsLoading(true);
      try {
        const response = await axios.get(
          `${baseUrl}movie/${movieId}/credits?api_key=${apiKey}&language=en-US`
        );
        if (response.status === 200) {
          setActors(response.data.cast);
        } else {
          setError('Error fetching movie actors.');
        }
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    };

    fetchMovieActors();
  }, [movieId]);

  return { actors, isLoading, error };
}
