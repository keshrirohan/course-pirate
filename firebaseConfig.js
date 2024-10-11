// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1xHaWbUYzXQFKrdIOI-UQVCj1EwRdN68",
  authDomain: "hackathon-45ad4.firebaseapp.com",
  databaseURL:
    "https://hackathon-45ad4-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "hackathon-45ad4",
  storageBucket: "hackathon-45ad4.appspot.com",
  messagingSenderId: "191570124524",
  appId: "1:191570124524:web:f3f8b3a33923c2784a8fc9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export let db = getDatabase(app);