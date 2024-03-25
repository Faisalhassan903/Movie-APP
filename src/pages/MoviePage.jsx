// src/pages/MoviePage.jsx
import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// Assume fetchMovieById is a mock function or fetching from an API
import { fetchMovieById } from '../services/movieService';

const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    const loadMovie = async () => {
      try {
        const fetchedMovie = await fetchMovieById(id);
        setMovie(fetchedMovie);
      } catch (error) {
        console.error('Error fetching movie:', error);
      } finally {
        setIsLoading(false); // Set loading to false when operation is complete
      }
    };

    loadMovie();
  }, [id]);

  // Loading indicator
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Handle scenario when there's no movie data (could be due to errors or data simply not existing)
  if (!movie) {
    return <div>Movie not found or does not exist.</div>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.summary}</p>
      {/* Render other movie details */}
    </div>
  );
};

export default MoviePage;
