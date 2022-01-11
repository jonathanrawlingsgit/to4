import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBSMaeWkqaLU451eFEn2onrXErbA2XtHlE",
    authDomain: "teamsof4-d606a.firebaseapp.com",
    projectId: "teamsof4-d606a",
    storageBucket: "teamsof4-d606a.appspot.com",
    messagingSenderId: "1029666413313",
    appId: "1:1029666413313:web:804ca1380fd91d03ef5900",
    measurementId: "G-V24QD507R7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  
  export { auth, provider, db } 
