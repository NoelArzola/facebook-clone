import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage"; //firestore?

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "facebook-f105a.firebaseapp.com",
  databaseURL: "https://facebook-f105a-default-rtdb.firebaseio.com",
  projectId: "facebook-f105a",
  storageBucket: "facebook-f105a.appspot.com",
  messagingSenderId: "1002901062104",
  appId: "1:1002901062104:web:cc00069dc916790160b2ad",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = firebase.firestore(app);
const storage = firebase.storage();
export { db, storage };
