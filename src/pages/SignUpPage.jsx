import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import './SignUpPage.css'; // Ensure this matches the actual file name and location

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError(''); // Reset error message before attempting to sign up
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('User created');
      navigate('/signin'); // Redirect user to sign-in page or another page
    } catch (error) {
      setError('Error creating user: ' + error.message); // Display error message
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSignUp}>
        <h2>Sign Up</h2>
        {error && <p className="error-message">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpPage;
