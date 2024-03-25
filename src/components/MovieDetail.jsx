import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetailsById } from '../services/movieService';

const MovieDetail = () => {
  const { id } = useParams();
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
    return <div className="text-white text-xl text-center mt-8">Loading movie details...</div>;
  }

  // Added pt-16 (or more based on your header's height) to add padding at the top
  return (
    <div className="text-white pt-16 p-4 md:pt-20"> {/* Adjust pt-16 or md:pt-20 based on your header's actual height */}
      <h2 className="text-4xl font-bold mb-4">{movie.title}</h2>
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} className="w-full md:w-1/3 rounded-lg shadow-lg" />
        <p className="text-lg">{movie.overview}</p>
      </div>
      {/* Add more details as needed */}
    </div>
  );
};

export default MovieDetail;
