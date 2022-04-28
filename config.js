import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyBvjOZS730bmy9Du4jizZH2i9tdiJR15oI",
    authDomain: "project71-8c144.firebaseapp.com",
    projectId: "project71-8c144",
    storageBucket: "project71-8c144.appspot.com",
    messagingSenderId: "617829798472",
    appId: "1:617829798472:web:62a73ef0f8fc6c62a1be7d"
  };
  
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
