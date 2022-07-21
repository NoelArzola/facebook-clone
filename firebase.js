import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAzZzhslYEicNJxog7hMZKuxEEUX9mRkLU",
  authDomain: "facebook-f105a.firebaseapp.com",
  projectId: "facebook-f105a",
  storageBucket: "facebook-f105a.appspot.com",
  messagingSenderId: "1002901062104",
  appId: "1:1002901062104:web:cc00069dc916790160b2ad",
};

const app = !firebase.apps.length
  ? initializeApp(firebaseConfig)
  : firebase.app();

const db = getDatabase(app);
console.log(db);
const storage = getStorage(app);

export { db, storage };
