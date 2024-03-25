// src/services/AuthService.jsx
import { auth } from '../firebaseConfig';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

const AuthService = {
  signUp: async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User created:', userCredential.user);
      return userCredential.user;
    } catch (error) {
      console.error('Error signing up:', error.message);
      throw error;
    }
  },

  signIn: async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('User signed in:', userCredential.user);
      return userCredential.user;
    } catch (error) {
      console.error('Error signing in:', error.message);
      throw error;
    }
  },

  signOut: async () => {
    try {
      await signOut(auth);
      console.log('User signed out');
    } catch (error) {
      console.error('Error signing out:', error.message);
      throw error;
    }
  },

  onAuthStateChanged: (callback) => {
    onAuthStateChanged(auth, callback);
  },
};

export default AuthService;
