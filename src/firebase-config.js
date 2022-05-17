// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkn67AbkdnPPXjUhlFRHmnfDlH7wWFugg",
  authDomain: "fir-tuts-b2b47.firebaseapp.com",
  projectId: "fir-tuts-b2b47",
  storageBucket: "fir-tuts-b2b47.appspot.com",
  messagingSenderId: "788490831641",
  appId: "1:788490831641:web:06002bbe0a1c21a1d52788",
  measurementId: "G-VPMQBPBP3H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);