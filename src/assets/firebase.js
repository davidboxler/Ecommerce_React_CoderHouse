// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyrIS1kz7LHk2ToenulTqGBB7tQqygnlY",
  authDomain: "ecommerce-coderhouse-9327c.firebaseapp.com",
  projectId: "ecommerce-coderhouse-9327c",
  storageBucket: "ecommerce-coderhouse-9327c.appspot.com",
  messagingSenderId: "251498801988",
  appId: "1:251498801988:web:a4b3c02e06e21067b64511"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;