// src/firebaseConfig.js
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCys5suzio-KnjKdqTFqMKWqffJ6L1gLYo",
  authDomain: "viktoriyagportfolio.firebaseapp.com",
  projectId: "viktoriyagportfolio",
  storageBucket: "viktoriyagportfolio.appspot.com",
  messagingSenderId: "337551981372",
  appId: "1:337551981372:web:23a3da79c6db5877127c39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app; // Export the initialized app