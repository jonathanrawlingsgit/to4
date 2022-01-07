import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBSMaeWkqaLU451eFEn2onrXErbA2XtHlE",
    authDomain: "teamsof4-d606a.firebaseapp.com",
    projectId: "teamsof4-d606a",
    storageBucket: "teamsof4-d606a.appspot.com",
    messagingSenderId: "1029666413313",
    appId: "1:1029666413313:web:804ca1380fd91d03ef5900",
    measurementId: "G-V24QD507R7"
  };
  
  const provider = new GoogleAuthProvider();
  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp)
  

  export { auth, db, provider } 