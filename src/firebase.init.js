// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzMn0m0AEBKsp0e3QlWeDZbXgpmQNHjRE",
  authDomain: "car-house-8d66f.firebaseapp.com",
  projectId: "car-house-8d66f",
  storageBucket: "car-house-8d66f.appspot.com",
  messagingSenderId: "339349267418",
  appId: "1:339349267418:web:2ac0fe01cfb0e4918496e3",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;