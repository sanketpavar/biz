// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
// import "dotenv/config";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// DEVELOPMENT CONFIGURATION
// const firebaseConfig = {
//   apiKey: "AIzaSyDXwgCMlt2KfSBdDY6LyLwvQ7i_zOYvaYE",
//   authDomain: "bnw-forum.firebaseapp.com",
//   projectId: "bnw-forum",
//   storageBucket: "bnw-forum.appspot.com",
//   messagingSenderId: "648651334228",
//   appId: "1:648651334228:web:b18f742b8db9b46b0b03c1",
// };

// PRODUCTION CONFIGURATION
const firebaseConfig = {
  apiKey: "AIzaSyCDKEMeOzhtiA7NL3qiulOF9fJFCXk1E1g",
  authDomain: "bnw-forum-54782.firebaseapp.com",
  projectId: "bnw-forum-54782",
  storageBucket: "bnw-forum-54782.appspot.com",
  messagingSenderId: "716466596340",
  appId: "1:716466596340:web:f5c5953580d6d8979771a1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage();
