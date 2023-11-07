import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Loader from 'components/Loader';
import ErrorMessage from 'components/ErrorMessage';

import { findMovieReviewsById } from 'services/api';

const Reviews = () => {
  const { movieId } = useParams();
  console.log('movieId', movieId);
  //const location = useLocation();
  //const backLinkHref = useRef(location.state?.from ?? '/');

  const [movieReviews, setMovieReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieReviews = async () => {
      try {
        setIsLoading(true);
        const data = await findMovieReviewsById(movieId);
        console.log('findMovieReviewsById', data);
        setMovieReviews(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieReviews();
  }, [movieId]);

  return (
    <div>
      rewievs
      {/* {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {/* {movieReviews !== null && (
        <ul>
          {movieReviews.cast.map(cast => {
            return (
              <li>
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
      )} */}
      {movieReviews.results.length === 0 ? (
        <p>We have not review yet</p>
      ) : (
        <p>Later...</p>
      )}{' '}
      */}
    </div>
  );
};

export default Reviews;
