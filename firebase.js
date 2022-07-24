import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage"; //firestore?

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
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = firebase.firestore();
const storage = firebase.storage();
export { db, storage };
