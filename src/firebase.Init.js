// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrE3WSJ_zIRkILGjYiXe9RQVfW3YhbGYE",
  authDomain: "recap-react-router-auth.firebaseapp.com",
  projectId: "recap-react-router-auth",
  storageBucket: "recap-react-router-auth.appspot.com",
  messagingSenderId: "486960467058",
  appId: "1:486960467058:web:669d8cc440bebbae9406eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;