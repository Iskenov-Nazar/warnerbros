// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0pC4lpHMmLtvV7l0hPM0u7hVXS2le9zQ",
  authDomain: "shop-js39-a2faa.firebaseapp.com",
  projectId: "shop-js39-a2faa",
  storageBucket: "shop-js39-a2faa.appspot.com",
  messagingSenderId: "1084463661392",
  appId: "1:1084463661392:web:8407a4a7282d4823eb6c55",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
