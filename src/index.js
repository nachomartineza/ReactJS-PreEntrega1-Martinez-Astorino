import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC79EhgVw1IophfzoAhJWFiNhniZ-lZT7w",
  authDomain: "f1-argentina.firebaseapp.com",
  projectId: "f1-argentina",
  storageBucket: "f1-argentina.appspot.com",
  messagingSenderId: "76114291017",
  appId: "1:76114291017:web:97890f167b03139c379298"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);