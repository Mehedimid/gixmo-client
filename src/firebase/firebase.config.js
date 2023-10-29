// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1FNATJJvQ3AGBjDSZSl2zXLzeDTgyR-g",
  authDomain: "brand-assignment-10.firebaseapp.com",
  projectId: "brand-assignment-10",
  storageBucket: "brand-assignment-10.appspot.com",
  messagingSenderId: "925475044333",
  appId: "1:925475044333:web:59a3c9ae1a249a4ea805e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
