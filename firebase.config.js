// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBC2YMHAq3W-biQoQz7WEwihsD1RscpVgw",
  authDomain: "assignment-13b1b.firebaseapp.com",
  projectId: "assignment-13b1b",
  storageBucket: "assignment-13b1b.appspot.com",
  messagingSenderId: "1033782220574",
  appId: "1:1033782220574:web:3f98c4aeb7c2032bbe9b0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
export default auth