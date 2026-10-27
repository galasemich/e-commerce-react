import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAcvO6zD9ooNw12tVYxVNy6-gryFh4n_B8",
  authDomain: "proyecto-react-2026.firebaseapp.com",
  projectId: "proyecto-react-2026",
  storageBucket: "proyecto-react-2026.firebasestorage.app",
  messagingSenderId: "655271785678",
  appId: "1:655271785678:web:149fffdf23aee5ffe68c9f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore()
const auth = getAuth(app)

export { db, auth }