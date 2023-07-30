// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";

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
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;
