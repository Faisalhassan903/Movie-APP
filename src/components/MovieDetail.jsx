import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetailsById } from '../services/movieService';
import './MovieDetail.css';
const MovieDetail = () => {
  const { id } = useParams(); // Get movie ID from URL params
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const details = await getMovieDetailsById(id);
        setMovie(details);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div>Loading movie details...</div>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
      <p>{movie.overview}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default MovieDetail;
