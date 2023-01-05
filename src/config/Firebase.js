// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8pwapFq4Peb1-uwRXa1HQlBUjFxbSUTU",
  authDomain: "playlist-35a20.firebaseapp.com",
  projectId: "playlist-35a20",
  storageBucket: "playlist-35a20.appspot.com",
  messagingSenderId: "501062793729",
  appId: "1:501062793729:web:da61edf20f6b76202bde00",
  measurementId: "G-BQECB6FV6L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);