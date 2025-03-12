// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, onValue} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALGxzCpLmWRQymyQO3Z1wcqsNIVggjWwk",
  authDomain: "blue-wave-5dd28.firebaseapp.com",
  databaseURL: "https://blue-wave-5dd28-default-rtdb.firebaseio.com",
  projectId: "blue-wave-5dd28",
  storageBucket: "blue-wave-5dd28.firebasestorage.app",
  messagingSenderId: "490266789315",
  appId: "1:490266789315:web:3d4e69977fbfba61c6a976",
  measurementId: "G-RG0MS01SKW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export { db, ref, get, onValue }