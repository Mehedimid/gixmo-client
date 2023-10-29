// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKgjg9voEGI8QHwJDQvWHLwcHM4bEHcuQ",
  authDomain: "culteral-event-assignment.firebaseapp.com",
  projectId: "culteral-event-assignment",
  storageBucket: "culteral-event-assignment.appspot.com",
  messagingSenderId: "777202902501",
  appId: "1:777202902501:web:98482e4d052d52d288bb0c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;