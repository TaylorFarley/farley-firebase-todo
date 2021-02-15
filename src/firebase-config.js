// src/firebase-config.js

import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBFKpf_KbQ2sDIf7GJt7B0P8pesf4lPB-g",
    authDomain: "farley-firebase-todo.firebaseapp.com",
    projectId: "farley-firebase-todo",
    storageBucket: "farley-firebase-todo.appspot.com",
    messagingSenderId: "600981424764",
    appId: "1:600981424764:web:da912f40298d7367f797f9",
    measurementId: "G-1R27FS7D5V"
  });

const db = firebaseApp.firestore();
export default db;