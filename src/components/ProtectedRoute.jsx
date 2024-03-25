
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import PropTypes from 'prop-types'; // Import PropTypes

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();

  return currentUser ? children : <Navigate to="/signin" />;
};

// Validate props
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired, // Specifies that children is required and should be a React node
};

export default ProtectedRoute;
