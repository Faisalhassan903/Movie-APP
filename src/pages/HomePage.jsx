import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link

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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {movies.map(movie => (
        <Link to={`/movie/${movie.id}`} key={movie.id} className="block transition duration-300 ease-in-out transform hover:scale-105">
          <div className="bg-gray-800 rounded overflow-hidden shadow-lg">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-full h-auto"/>
            <div className="px-6 py-4">
              <h3 className="font-semibold text-xl mb-2 text-white">{movie.title}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HomePage;
