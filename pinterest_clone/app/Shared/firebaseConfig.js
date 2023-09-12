// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUkfQ3cliUekX21MWvKj9sFzcpAsQR7qU",
  authDomain: "pinterest-clone-001.firebaseapp.com",
  projectId: "pinterest-clone-001",
  storageBucket: "pinterest-clone-001.appspot.com",
  messagingSenderId: "845757148900",
  appId: "1:845757148900:web:be8e79786471d9d3e246f1",
  measurementId: "G-3588D20L07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;