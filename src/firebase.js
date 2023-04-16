import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBIA2u5jo5AyKtU9VBkGeg0b-EDk5ymom8",
    authDomain: "clone-22d24.firebaseapp.com",
    projectId: "clone-22d24",
    storageBucket: "clone-22d24.appspot.com",
    messagingSenderId: "768280556762",
    appId: "1:768280556762:web:d7255d696965c0ef2161e3",
    measurementId: "G-B7YQ35WHBC"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db,auth }