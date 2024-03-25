// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCrkP9UxBtn9mJQ-GhxgJ1cyP3Rz53uFmQ",
    authDomain: "react-movie-app-6720b.firebaseapp.com",
    databaseURL: "https://react-movie-app-6720b-default-rtdb.firebaseio.com",
    projectId: "react-movie-app-6720b",
    storageBucket: "react-movie-app-6720b.appspot.com",
    messagingSenderId: "257725877680",
    appId: "1:257725877680:web:68834d5a7244a5525eda75",
    measurementId: "G-KY0NJ8N63Y"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  

// Initialize Firebase



// Initialize Firestore
const firestore = getFirestore(app);

// Initialize Firebase Authentication
const auth = getAuth(app);

export { firestore, auth ,firestore as db };