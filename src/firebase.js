import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBZVulfoXk4tUEi6p1bfFo9tFPe-gVP2Cg",
    authDomain: "snapchat-clone-b1efd.firebaseapp.com",
    projectId: "snapchat-clone-b1efd",
    storageBucket: "snapchat-clone-b1efd.appspot.com",
    messagingSenderId: "407424973378",
    appId: "1:407424973378:web:9b430e1a4ce18000390bdb",
    measurementId: "G-EC8B7Q9P95"
  });

  const db = firebaseApp.firestore();
  export default db;
