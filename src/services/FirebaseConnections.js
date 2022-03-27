import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';
import firebaseConfig from "../utils/firebaseConfig";

  // Initialize Firebase
  if(!firebase.apps.length){
  const app = firebase.initializeApp(firebaseConfig);
    // firebase.analytics(app);
  }

  export default firebase;
 