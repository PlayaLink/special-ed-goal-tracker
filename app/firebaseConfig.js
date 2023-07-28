// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0gNTjdI4cFXjLnG3v1n56yJSeDKL2qrM",
  authDomain: "iep-goal-tracker-64fbc.firebaseapp.com",
  projectId: "iep-goal-tracker-64fbc",
  storageBucket: "iep-goal-tracker-64fbc.appspot.com",
  messagingSenderId: "126940751503",
  appId: "1:126940751503:web:af4230cf5860832128b2fa",
  measurementId: "G-S75D59L9DG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const analytics = getAnalytics(app);