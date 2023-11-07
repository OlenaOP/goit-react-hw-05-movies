import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom';
// import PostCommentsPage from './PostCommentsPage';
import Loader from 'components/Loader';
import ErrorMessage from 'components/ErrorMessage';
import { StyledMovieDetailsContainer } from './MovieDetails.styled.js';

import { findMovieById } from 'services/api';
// import Cast from './Cast.jsx';
// import Reviews from './Reviews.jsx';

const Cast = lazy(() => import('pages/Cast'));
const Reviews = lazy(() => import('pages/Reviews'));

const MovieDetails = () => {
  const { movieId } = useParams();
  console.log('movieId', movieId);
  //const location = useLocation();
  //const backLinkHref = useRef(location.state?.from ?? '/');

  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    const fetchMovie = async () => {
      try {
        setIsLoading(true);
        const data = await findMovieById(movieId);
        console.log('MovieDetails', data);
        setMovieDetails(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovie();
  }, [movieId]);

  return (
    <div>
      {/* <Link to={backLinkHref.current}>Go Back</Link> */}

      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {movieDetails !== null && (
        <StyledMovieDetailsContainer>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
              alt={movieDetails.title}
              align="left"
              width="200px"
            />
          </div>
          <div>
            <h2> {movieDetails.title}</h2>
            <p>User score: {movieDetails.vote_average}</p>
            <h3> Overview</h3>
            <p>{movieDetails.overview}</p>
            <h4> Genres</h4>
            <p>{movieDetails.genres.map(genre => genre.name).join(' ')}</p>
          </div>
        </StyledMovieDetailsContainer>
      )}
      <hr />
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <NavLink to="cast" className="header-link">
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to="reviews" className="header-link">
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default MovieDetails;
