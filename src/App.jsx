import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import MovieDetail from './components/MovieDetail';
import SearchPage from './pages/SearchPage';
import ProfileCreation from './components/ProfileCreation';
import ProfileManagement from './components/ProfileManagment';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';
import Herosection from  "./components/Herosection";

function App() {
  useEffect(() => {
    // Function to dynamically load the Tidio chat script
    const loadTidioChat = () => {
      const existingScript = document.getElementById('tidio-chat-script');
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = "//code.tidio.co/zzquatxnpbskg8rdst2200g8ocngf4os.js";
        script.async = true;
        script.id = 'tidio-chat-script';
        document.body.appendChild(script);
      }
    };

    // Load the chat script when the component mounts
    loadTidioChat();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Layout>
            <Herosection />
            <HomePage />
          </Layout>
        } />
        <Route path="/movie/:id" element={
          <Layout>
            {/* Apply ProtectedRoute only to MovieDetail */}
            <ProtectedRoute>
              <MovieDetail />
            </ProtectedRoute>
          </Layout>
        } />
        <Route path="/movies" element={
          <Layout>
            <MoviePage />
          </Layout>
        } />
        <Route path="/signup" element={
          <Layout>
            <SignUpPage />
          </Layout>
        } />
        <Route path="/signin" element={
          <Layout>
            <SignInPage />
          </Layout>
        } />
        <Route path="/search" element={
          <Layout>
            <SearchPage />
          </Layout>
        } />
        <Route path="/profiles/create" element={
          <Layout>
            <ProfileCreation />
          </Layout>
        } />
        <Route path="/profiles" element={
          <Layout>
            <ProfileManagement />
          </Layout>
        } />
        {/* Define other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
