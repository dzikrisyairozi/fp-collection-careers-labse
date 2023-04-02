import { getApps, initializeApp } from 'firebase/app';
import firebase from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDNBqJr9FGMmwgmyHAHN_7EvSfkDP4N7k8",
    authDomain: "fp-collection-eef4c.firebaseapp.com",
    projectId: "fp-collection-eef4c",
    storageBucket: "fp-collection-eef4c.appspot.com",
    messagingSenderId: "579825109897",
    appId: "1:579825109897:web:c95cbb17a46b7e67adef58",
    measurementId: "G-KN6NK1WZCP"
  };

export function initFirebase() {
  if (!getApps().length) {
    firebase.initializeApp(firebaseConfig);
  }
}

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const db = getFirestore(app);

export default db;