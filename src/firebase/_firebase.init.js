// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAM8iF5KyGTdqBhzX-i1n-K2B6iRwrGgk",
  authDomain: "react-practicing-app.firebaseapp.com",
  projectId: "react-practicing-app",
  storageBucket: "react-practicing-app.firebasestorage.app",
  messagingSenderId: "659598038313",
  appId: "1:659598038313:web:8be1d5d7ff11bc8acf1338"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)