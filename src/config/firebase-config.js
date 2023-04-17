// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDccSDbR47_gBLGTKsICH3aKlKTR4vnr4k",
  authDomain: "learn-firebase-f88e8.firebaseapp.com",
  projectId: "learn-firebase-f88e8",
  storageBucket: "learn-firebase-f88e8.appspot.com",
  messagingSenderId: "645507940558",
  appId: "1:645507940558:web:2373f0a9043a410406509f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
