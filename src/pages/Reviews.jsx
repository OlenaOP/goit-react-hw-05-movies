import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Loader from 'components/Loader';
import ErrorMessage from 'components/ErrorMessage';

import { findMovieReviewsById } from 'services/api';

const Reviews = () => {
  const { movieId } = useParams();
  console.log('movieId reviews', movieId);

  const [movieReviews, setMovieReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieReviews = async () => {
      try {
        setIsLoading(true);
        const data = await findMovieReviewsById(movieId);
        console.log('findMovieReviewsById', data);
        console.log('findMovieReviewsById', data.results, data.results.length);
        setMovieReviews(data.results);
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
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {movieReviews.length === 0 ? (
        <p>We don't have any reviews for this movie.</p>
      ) : (
        <div>
          <ul>
            {movieReviews.map(review => {
              return (
                <li>
                  <h4>{review.author}</h4>
                  <p>{review.content}</p>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Reviews;
