// src/components/MovieList.js

import PropTypes from 'prop-types'; // Import PropTypes

const MovieList = ({ movies }) => {
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.summary}</p>
        </div>
      ))}
    </div>
  );
};

// Define prop types
MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      summary: PropTypes.string
    })
  ).isRequired
};

export default MovieList;