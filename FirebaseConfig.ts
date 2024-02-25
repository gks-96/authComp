// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCydC-XeM3NK168vCRX6h9iVLsb47kwoKI",
  authDomain: "rn-auth-c23f7.firebaseapp.com",
  projectId: "rn-auth-c23f7",
  storageBucket: "rn-auth-c23f7.appspot.com",
  messagingSenderId: "183100991049",
  appId: "1:183100991049:web:049dd45a0ed5d0432cc198",
  measurementId: "G-J307ZRN36H"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
// const analytics = getAnalytics(app);