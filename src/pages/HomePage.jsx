import ErrorMessage from 'components/ErrorMessage';
import Loader from 'components/Loader';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendMovies } from 'services/api';

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const data = await fetchTrendMovies();
        setMovies(data);
        console.log('trend movies', data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {movies !== null &&
        movies.results.map(movie => (
          <Link
            // state={{ from: location }}
            to={`/post-details/${movie.id}`}
            key={movie.id}
          >
            <p>{movie.name || movie.title}</p>
          </Link>
        ))}
    </div>
  );
};

export default HomePage;
