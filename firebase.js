// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBj9JMJVegP9oxNtBI5HyGfUxmuQDyr90",
  authDomain: "build-your-own-portfolio.firebaseapp.com",
  projectId: "build-your-own-portfolio",
  storageBucket: "build-your-own-portfolio.firebasestorage.app",
  messagingSenderId: "896563479362",
  appId: "1:896563479362:web:3d6c1f9924057f0ddebedb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);