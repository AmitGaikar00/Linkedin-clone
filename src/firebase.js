import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAObpMasQvijMjOx-KwSBze6R2YF8Y9SM8",
    authDomain: "linkedin-clone-ce46a.firebaseapp.com",
    projectId: "linkedin-clone-ce46a",
    storageBucket: "linkedin-clone-ce46a.appspot.com",
    messagingSenderId: "952904085498",
    appId: "1:952904085498:web:778c5da92a8dce96c93e43"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };