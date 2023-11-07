import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Loader from 'components/Loader';
import ErrorMessage from 'components/ErrorMessage';

import { findMovieCreditsById } from 'services/api';

const Cast = () => {
  const { movieId } = useParams();
  console.log('movieId', movieId);
  //const location = useLocation();
  //const backLinkHref = useRef(location.state?.from ?? '/');

  const [movieCredits, setMovieCredits] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieDetails = async () => {
      try {
        setIsLoading(true);
        const data = await findMovieCreditsById(movieId);
        console.log('findMovieCreditsById', data);
        setMovieCredits(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {movieCredits !== null && (
        <ul>
          {movieCredits.cast.map(cast => {
            return (
              <li key={cast.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                  alt={cast.name}
                  width="100px"
                />
                <p>{cast.name}</p>
                <p>Character: {cast.character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Cast;
