// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtMOcrsNTvn0WW28PPlTX0IQbbmArHHh0",
  authDomain: "auth-1c417.firebaseapp.com",
  projectId: "auth-1c417",
  storageBucket: "auth-1c417.firebasestorage.app",
  messagingSenderId: "1007416015922",
  appId: "1:1007416015922:web:67e81b7535f76c7651102b",
  measurementId: "G-ZMGHB3V9BF"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 