// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzhLLg29J3h-f_3XO6wVOJ_Qq26mATJyU",
  authDomain: "khwantaapp-366013.firebaseapp.com",
  projectId: "khwantaapp-366013",
  storageBucket: "khwantaapp-366013.appspot.com",
  messagingSenderId: "996142191832",
  appId: "1:996142191832:web:36affce3448648ebccf3ad",
  measurementId: "G-1Q2GDRXQ9Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
