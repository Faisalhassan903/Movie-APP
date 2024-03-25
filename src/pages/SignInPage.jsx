import { useState } from "react";
import AuthService from "../services/authService";
import "./SignInpage.css"; // Assuming the CSS file is properly named and located
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig"; // Import auth from firebaseConfig

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError(""); // Reset error message
    try {
      await AuthService.signIn(email, password);
      // Redirect user after sign-in
      navigate("/"); // Redirect to the homepage
    } catch (error) {
      setError("Failed to sign in: " + error.message); // Display error message
    }
  };

  // Check if user is logged in
  const user = auth.currentUser;

  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleSignIn}>
        <h2>Sign In</h2>
        {error && <p className="error-message">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="signin-button">
          Sign In
        </button>
      </form>
      {user && ( // Show profile icon if user is logged in
     <div className="profile-icon"></div>
      )}
    </div>
  );
};

export default SignInPage;
