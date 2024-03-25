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
    <header className="bg-black text-white fixed top-0 left-0 w-full z-50 px-4 py-2 shadow-md">
      <nav className="container flex justify-between items-center mx-auto">
        <Link to="/" className="text-xl md:text-2xl lg:text-3xl font-bold">MovieStream</Link>

        {/* Toggle Button for Mobile View */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-3xl md:hidden">
          <span>☰</span>
        </button>

        {/* Conditional rendering based on isMenuOpen state for mobile menu */}
        <div className={`${
            isMenuOpen ? "flex" : "hidden"
          } absolute flex-col top-full left-0 w-full md:static md:w-auto md:flex md:flex-row items-center bg-black md:bg-transparent transition-all ease-out duration-300`}>
          <SearchBar />
          {user ? (
            <>
              <div className="flex flex-col md:flex-row items-center mt-4 md:mt-0">
                
                <button onClick={handleSignOut} className="mt-4 md:mt-0 md:ml-4 bg-red-600 hover:bg-red-700 rounded py-2 px-4 transition duration-300 text-center">Sign Out</button>
              </div>
            </>
          ) : (
            <>
              <Link to="/signup" className="mt-4 md:mt-0 md:mr-4 inline-block bg-red-600 hover:bg-red-700 rounded py-2 px-4 transition duration-300 text-center">Sign Up</Link>
              <Link to="/signin" className="mt-4 md:mt-0 inline-block bg-red-600 hover:bg-red-700 rounded py-2 px-4 transition duration-300 text-center">Sign In</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
