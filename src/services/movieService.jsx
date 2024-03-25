import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const API_KEY = '4825898bb93830d5fec5b575d92865ae'// Replace this with your actual TMDB API key
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

// Existing Firestore functions
export const fetchMovieById = async (movieId) => {
  const movieRef = doc(db, 'movies', movieId);
  const movieSnap = await getDoc(movieRef);

  if (movieSnap.exists()) {
    return { id: movieSnap.id, ...movieSnap.data() };
  } else {
    console.log('No such document!');
  }
};

export const fetchMovies = async () => {
  const moviesRef = collection(db, 'movies');
  const snapshot = await getDocs(moviesRef);
  const moviesList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return moviesList;
};

// New TMDB function
export const getNowPlayingMovies = async () => {
  try {
    const response = await fetch(`${TMDB_BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`);
    if (!response.ok) {
      throw new Error('Failed to fetch now playing movies from TMDB.');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching now playing movies from TMDB:', error);
    throw error;
  }
};
// Add this function to your movieService.js
export const getMovieDetailsById = async (movieId) => {
    try {
      const response = await fetch(`${TMDB_BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
      if (!response.ok) {
        throw new Error('Failed to fetch movie details.');
      }
      const movieDetails = await response.json();
      return movieDetails;
    } catch (error) {
      console.error('Error fetching movie details:', error);
      throw error;
    }
  };
  // Add to movieService.js
export const searchMovies = async (query) => {
    if (!query.trim()) return []; // Avoid empty queries
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(query)}&page=1&include_adult=false`
      );
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error('Error searching movies:', error);
      throw error;
    }
  };
  