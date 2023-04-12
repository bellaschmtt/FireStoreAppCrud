// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAn3XrenG6CyAmLtoUBygWktKf3jyDS4qU",
  authDomain: "myfire-7ba10.firebaseapp.com",
  projectId: "myfire-7ba10",
  storageBucket: "myfire-7ba10.appspot.com",
  messagingSenderId: "509571394860",
  appId: "1:509571394860:web:b2663982c912ecdc5c9089",
  measurementId: "G-N0CZ3Y03SH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getFirestore(app);

