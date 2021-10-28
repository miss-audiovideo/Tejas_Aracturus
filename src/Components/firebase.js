import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBnkbOxHP_ZqvN60SRKSrDSMXnF94bScS0",
    authDomain: "contact-13fea.firebaseapp.com",
    projectId: "contact-13fea",
    storageBucket: "contact-13fea.appspot.com",
    messagingSenderId: "819556004915",
    appId: "1:819556004915:web:1f3da699f58ec23e521f46"
  });


var db = firebaseApp.firestore();

export { db };
