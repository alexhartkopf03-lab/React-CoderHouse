import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBkYwK_VGslp86JlmHuY56lpbJHhQnZq98",
  authDomain: "reactcoderhouse-a9a06.firebaseapp.com",
  projectId: "reactcoderhouse-a9a06",
  storageBucket: "reactcoderhouse-a9a06.firebasestorage.app",
  messagingSenderId: "547612306750",
  appId: "1:547612306750:web:bc7bf438545539b555106f"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)