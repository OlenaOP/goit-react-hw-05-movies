import { ReactComponent as IconSearch } from 'assets/images/search.svg';
import ErrorMessage from 'components/ErrorMessage';
import Loader from 'components/Loader';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { findMoviesByQuery } from 'services/api';

import { StyledMovieDetailsContainer } from './MovieDetails.styled.js';

// (async () => { // -- IIFE (Immediately invoked function expression)
//   try {
//     setIsLoading(true);
//     const postData = await findPostById(query);

//     setPosts([postData]);
//   } catch (error) {
//     setError(error.message);
//   } finally {
//     setIsLoading(false);
//   }
// })()

const Movies = () => {
  // /search?query=56
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;

    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const data = await findMoviesByQuery(query);
        console.log('search query', data);
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [query]);

  const handleFormSubmit = event => {
    event.preventDefault();
    const searchValue = event.currentTarget.elements.searchPostId.value;

    setSearchParams({ query: searchValue });
  };

  return (
    <div>
      <StyledMovieDetailsContainer>
        <form onSubmit={handleFormSubmit}>
          <label>
            <input type="text" name="searchPostId" required />
          </label>
          <button type="submit">
            <IconSearch /> Search
          </button>
        </form>
      </StyledMovieDetailsContainer>
      <section>
        {isLoading && <Loader />}
        {error && <ErrorMessage message={error} />}
        {movies.length !== 0 && (
          <ul>
            {movies.map(movie => (
              <Link
                state={{ from: location }}
                to={`/movies/${movie.id}`}
                key={movie.id}
              >
                <li>{movie.title}</li>
              </Link>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default Movies;
