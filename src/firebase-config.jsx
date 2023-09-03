// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGee3fkQnWlonlG2S3aaJfY0USnp0qzdM",
  authDomain: "react-auth-19fd1.firebaseapp.com",
  projectId: "react-auth-19fd1",
  storageBucket: "react-auth-19fd1.appspot.com",
  messagingSenderId: "1079472411842",
  appId: "1:1079472411842:web:50e8dd0e6542ef2807575b",
  measurementId: "G-H810S1CZCV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
