// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore/lite'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6GFFNCqc6v-gFELD44KnIxyq7gtXj46E",
  authDomain: "journal-app-266bb.firebaseapp.com",
  projectId: "journal-app-266bb",
  storageBucket: "journal-app-266bb.appspot.com",
  messagingSenderId: "601168318024",
  appId: "1:601168318024:web:b0be3ed4a1d65f0cc7527d",
  measurementId: "G-WPK66B5BTH"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);

