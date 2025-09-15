import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBc6pIseG0NAp5UakHooUjk1TA0T53N0Wo",
  authDomain: "daily-recovery-verse.firebaseapp.com",
  projectId: "daily-recovery-verse",
  storageBucket: "daily-recovery-verse.firebasestorage.app",
  messagingSenderId: "878798574539",
  appId: "1:878798574539:web:0497786f20e7703e60dc4e"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);