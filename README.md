echo "# Movie-APP"
https://movie-app-pearl-three.vercel.app/
MovieStream App
Welcome to MovieStream, a web application inspired by Netflix that allows users to explore, watch, and enjoy a wide range of movies anywhere, anytime. Built with modern web technologies, MovieStream offers a seamless and intuitive user experience, mirroring the sophistication and simplicity of popular streaming services.

Features
Discover Movies: Browse through a curated list of movies across different genres. Our selection is updated regularly to ensure there's always something new to discover.
Hero Section: Be greeted with a captivating hero section upon arrival, featuring a high-quality, autoplaying video background that sets the cinematic mood.
Responsive Design: Enjoy a consistent viewing experience across various devices, thanks to our mobile-first, responsive design approach.
User Authentication: Securely sign up, sign in, and manage your user profile through Firebase Authentication.
Real-time Database: Leveraging Firebase Firestore, MovieStream provides real-time updates to movie lists and user profiles.
Heroic CSS: Our app boasts a Netflix-inspired theme with a focus on readability, accessibility, and engaging visuals.
Environmental Awareness: Environment variables are used for secure and flexible configuration, ensuring sensitive data stays out of the codebase.
Technologies Used
React: A JavaScript library for building user interfaces
Firebase: Backend-as-a-Service (BaaS) used for authentication, database (Firestore), and hosting
CSS: Styling is done with pure CSS, featuring a custom Netflix-inspired theme
React Router: For seamless, client-side navigation

npm install

Create a Firebase project through the Firebase Console.

Configure Authentication, Firestore Database, and Hosting as per your needs.

Create a .env file at the root of your project and fill in your Firebase configuration det

REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
