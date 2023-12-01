// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnmwaUcsDIwA36eXDCGQmzoTcQYdc7d-o",
  authDomain: "estatevista-bace6.firebaseapp.com",
  projectId: "estatevista-bace6",
  storageBucket: "estatevista-bace6.appspot.com",
  messagingSenderId: "289602619154",
  appId: "1:289602619154:web:b9e7446624350f34d295cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
export default auth