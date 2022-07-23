import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzZzhslYEicNJxog7hMZKuxEEUX9mRkLU",
  authDomain: "facebook-f105a.firebaseapp.com",
  projectId: "facebook-f105a",
  storageBucket: "facebook-f105a.appspot.com",
  messagingSenderId: "1002901062104",
  appId: "1:1002901062104:web:cc00069dc916790160b2ad",
  databaseURL: "facebook-f105a.firebaseio.com",
};

const app = !firebase.apps.length
  ? initializeApp(firebaseConfig)
  : firebase.app();

const db = getFirestore(app);
const storage = getStorage();

export { db, storage };
