// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTtFaoeP3p7agjpRnZrRT6K9Y8yuqvqj8",
  authDomain: "pantry-tracker-a8f98.firebaseapp.com",
  projectId: "pantry-tracker-a8f98",
  storageBucket: "pantry-tracker-a8f98.appspot.com",
  messagingSenderId: "892072480276",
  appId: "1:892072480276:web:f57e9c440252ae79ab2101",
  measurementId: "G-NKRHSRBE4Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app)

export{firestore}