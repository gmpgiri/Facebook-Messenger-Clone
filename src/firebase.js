import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA6ntxhPSSqCyTeJExQ9H7ofiJgYvIx3B4",
    authDomain: "facebook-messenger-955f2.firebaseapp.com",
    databaseURL: "https://facebook-messenger-955f2.firebaseio.com",
    projectId: "facebook-messenger-955f2",
    storageBucket: "facebook-messenger-955f2.appspot.com",
    messagingSenderId: "438700507790",
    appId: "1:438700507790:web:f90c284ebbdf00c835bfdf",
    measurementId: "G-YL4GXGXPKK"
});

const db = firebaseApp.firestore();

export default db;