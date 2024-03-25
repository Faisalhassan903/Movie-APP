import  { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../firebaseConfig';
import PropTypes from 'prop-types'; // Import PropTypes even in a .jsx file

const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false);
    });

    return () => unsubscribe(); // Clean up the subscription
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// PropTypes validation works the same way in .jsx files
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
