import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { signOut } from 'firebase/auth';
import SearchBar from './SearchBar';

const Header = () => {
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control mobile menu toggle

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user ? user : null);
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null); // Reset user state
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <header className="bg-black text-white fixed top-0 left-0 w-full z-50 px-4 py-2 shadow-lg">
      <nav className="container max-w-6xl flex justify-between items-center mx-auto">
        <Link to="/" className="text-2xl font-bold transition-colors duration-300 hover:text-red-600">MovieStream</Link>

        {/* Toggle Button for Mobile View */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-4xl md:hidden">
          ☰
        </button>

        {/* Navigation links and SearchBar */}
        <div className={`${isMenuOpen ? "flex" : "hidden"} md:flex md:flex-row items-center bg-black py-4 md:py-0 transition-all ease-out duration-300 absolute md:relative top-full md:top-auto left-0 w-full md:w-auto`}>
          <SearchBar />
          {user ? (
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 mt-4 md:mt-0">
              <button onClick={handleSignOut} className="bg-red-600 hover:bg-red-700 rounded py-2 px-4 transition duration-300 text-white">Sign Out</button>
            </div>
          ) : (
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 mt-4 md:mt-0">
              <Link to="/signup" className="inline-block bg-red-600 hover:bg-red-700 rounded py-2 px-4 transition duration-300 text-center text-white">Sign Up</Link>
              <Link to="/signin" className="inline-block bg-red-600 hover:bg-red-700 rounded py-2 px-4 transition duration-300 text-center text-white">Sign In</Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
