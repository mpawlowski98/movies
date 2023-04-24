export const useFetchMoviesDetails = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMoviesReviews = async () => {
      if (!movieId) {
        setReviews([]);
        return;
      }
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${baseUrl}movie/${movieId}/reviews?api_key=${apiKey}&language=en-US`
        );
        if (response.status === 200) {
          setReviews(response.data.results);
        } else {
          setError(`Error fetch details`);
        }
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    };

    fetchMoviesReviews();
  }, [movieId]);

  return [reviews, isLoading, error];
};
