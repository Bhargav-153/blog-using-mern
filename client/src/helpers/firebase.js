import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getEnv } from "./getEnv";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: getEnv('VITE_FIREBASE_API'),
  authDomain: "blog123-98f8a.firebaseapp.com",
  projectId: "blog123-98f8a",
  storageBucket: "blog123-98f8a.firebasestorage.app",
  messagingSenderId: "392702208784",
  appId: "1:392702208784:web:494180607c26116d9f5395"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth  = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };