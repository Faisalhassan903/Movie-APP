/* eslint-disable react/no-unescaped-entities */
// src/pages/SearchPage.js
import  { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../services/movieService';
//import './SearchPage.css'; // Assume you have some basic styling

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get('query');

  useEffect(() => {
    if (query) {
      searchMovies(query).then(setMovies);
    }
  }, [query]);

  return (
    <div className="search-results">
      <h2>Search Results for: "{query}"</h2>
      <div className="movie-container">
        {movies.map(movie => (
          <div key={movie.id} className="movie">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
