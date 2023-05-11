// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbJYhtyRIMDqeMX7vvLAzbWDzrffuOBVA",
  authDomain: "fir-practice-39f96.firebaseapp.com",
  projectId: "fir-practice-39f96",
  storageBucket: "fir-practice-39f96.appspot.com",
  messagingSenderId: "283463112106",
  appId: "1:283463112106:web:8e5922aadac4d12100c7d3",
  measurementId: "G-BLHLME3M2Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);