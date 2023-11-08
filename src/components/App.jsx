import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

// import HomePage from 'pages/HomePage';
// import PostsPage from 'pages/PostsPage';
// import SearchPage from 'pages/SearchPage';
// import PostDetailsPage from 'pages/PostDetailsPage';

import { StyledAppContainer, StyledNavLink } from './App.styled.js';
import Loader from 'components/Loader';

const Home = lazy(() => import('pages/Home'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Movies = lazy(() => import('pages/Movies'));

/*
Маршрутизація:

 <a href="www.google.com">Google</a> - будь-які посилання на зовнішні ресурси, 
 поза нашим додатком

 <Link to="/some-route">Some page</Link>
 <NavLink to="/some-route"> Some page</NavLink> - для маршутизації по нашому додатку

  1. Зміна адресної строки браузера.
  2. Підготувати Route для відображення, тієї чи іншої сторінки 
     <Route path="/some-route" element={<HomePage />} />

*/

export const App = () => {
  return (
    <StyledAppContainer>
      <header className="header">
        <nav>
          <StyledNavLink className="header-link" to="/">
            Home
          </StyledNavLink>
          <StyledNavLink className="header-link" to="/movies">
            Movies
          </StyledNavLink>
        </nav>
      </header>

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId/*" element={<MovieDetails />} />
        </Routes>
      </Suspense>
    </StyledAppContainer>
  );
};
