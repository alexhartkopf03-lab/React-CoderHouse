// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkYwK_VGslp86JlmHuY56lpbJHhQnZq98",
  authDomain: "reactcoderhouse-a9a06.firebaseapp.com",
  projectId: "reactcoderhouse-a9a06",
  storageBucket: "reactcoderhouse-a9a06.firebasestorage.app",
  messagingSenderId: "547612306750",
  appId: "1:547612306750:web:bc7bf438545539b555106f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)