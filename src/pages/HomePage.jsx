import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './HomePage.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const API_KEY = '4825898bb93830d5fec5b575d92865ae'; // Use your TMDB API key

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );
      const data = await response.json();
      setMovies(data.results);
    };

    fetchMovies();
  }, [API_KEY]);

  return (
    <div className="movie-container">
      {movies.map(movie => (
        // Wrap each movie with a Link component
        <Link to={`/movie/${movie.id}`} key={movie.id} className="movie-link">
          <div className="movie">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <h3>{movie.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HomePage;
