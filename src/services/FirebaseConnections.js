import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';
const firebaseConfig = {
    apiKey: "AIzaSyAPYlEi2kMBnbfQRGvjWBmaSU8dLvA7gsw",
    authDomain: "lisbeer.firebaseapp.com",
    projectId: "lisbeer",
    storageBucket: "lisbeer.appspot.com",
    messagingSenderId: "848659348511",
    appId: "1:848659348511:web:684095a05f02866a4d292a",
    measurementId: "G-N9LJZV7HWR"
  };
  
  // Initialize Firebase
  if(!firebase.apps.length){
  const app = firebase.initializeApp(firebaseConfig);
    // firebase.analytics(app);
  }

  export default firebase;
 