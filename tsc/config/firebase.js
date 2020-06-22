import firebase from 'firebase';
require ('firebase/firestore')

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  };



  firebase.initializeApp(firebaseConfig)

  const db = firebase.firestore()
  
  export default db;
