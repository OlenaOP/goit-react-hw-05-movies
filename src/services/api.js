import axios from 'axios';
const API_KEY = 'c733d5722025e30bc2b3b5d79114d6a2';

export const fetchTrendMovies = async () => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
  );
  return data;
};

export const findMovieById = async movieId => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
  );
  return data;
};

export const findMovieCreditsById = async movieId => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return data;
};

export const findMovieReviewsById = async movieId => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return data;
};

export const findMoviesByQuery = async query => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}`
  );
  return data;
};

export const fetchPosts = async () => {
  const { data } = await axios.get(
    'https://jsonplaceholder.typicode.com/posts/'
  );
  return data;
};

export const findPostById = async postId => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  return data;
};

export const findPostCommentsById = async postId => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  );
  return data;
};
