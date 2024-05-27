// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1Ct_tVtvwKT7vp4pHXVIxViWp0iHDGrs",
  authDomain: "netflixgpt-c74d9.firebaseapp.com",
  projectId: "netflixgpt-c74d9",
  storageBucket: "netflixgpt-c74d9.appspot.com",
  messagingSenderId: "613618987115",
  appId: "1:613618987115:web:eef3322ab8ce84e94dc12e",
  measurementId: "G-7MM7L60P6W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();