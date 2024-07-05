// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYJJkqJ8qYFMI6aeLfh9mcHR8Y9iEbEP0",
  authDomain: "quiztok-123c4.firebaseapp.com",
  databaseURL: "https://quiztok-123c4-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "quiztok-123c4",
  storageBucket: "quiztok-123c4.appspot.com",
  messagingSenderId: "878908069531",
  appId: "1:878908069531:web:6acb14a2dc5642566d183e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export { database }