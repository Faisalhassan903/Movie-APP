import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?query=${encodeURIComponent(query)}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="bg-gray-800 text-white rounded-full px-4 py-2 focus:outline-none focus:ring focus:border-transparent"
      />
      <button type="submit" className="ml-2 bg-red-600 hover:bg-red-700 rounded px-4 py-2 text-white transition duration-300">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
