// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/compat/auth";
import "firebase/compat/app";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD0pC4lpHMmLtvV7l0hPM0u7hVXS2le9zQ",
  authDomain: "shop-js39-a2faa.firebaseapp.com",
  projectId: "shop-js39-a2faa",
  storageBucket: "shop-js39-a2faa.appspot.com",
  messagingSenderId: "1084463661392",
  appId: "1:1084463661392:web:8407a4a7282d4823eb6c55",
};

const app = initializeApp(firebaseConfig);
