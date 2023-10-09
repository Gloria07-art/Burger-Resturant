// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBSlfPMNphmMKGbs7vTCLsMHm74UJsQyeg",
  authDomain: "res-app-982c7.firebaseapp.com",
  databaseURL: "https://res-app-982c7-default-rtdb.firebaseio.com",
  projectId: "res-app-982c7",
  storageBucket: "res-app-982c7.appspot.com",
  messagingSenderId: "753832022416",
  appId: "1:753832022416:web:446eaa3203fabf889f6315",
  measurementId: "G-736B1RPPBM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service

const auth = getAuth(app);
const db = getFirestore(app);


export {auth , db}