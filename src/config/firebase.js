import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-MtLp9KfIVCsB1769t5nYQcMfQnrOL94",
  authDomain: "react-coder-42646.firebaseapp.com",
  projectId: "react-coder-42646",
  storageBucket: "react-coder-42646.appspot.com",
  messagingSenderId: "957663034527",
  appId: "1:957663034527:web:949f1085b6f18057c776aa"
}; 

// Initialize Firebase 
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)  
 


 