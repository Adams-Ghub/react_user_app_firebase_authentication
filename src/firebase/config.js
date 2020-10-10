import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyA-kUotIyWfkl5zajTAyz6PgnhbFKHA22o",
    authDomain: "userapp-8f3fc.firebaseapp.com",
    databaseURL: "https://userapp-8f3fc.firebaseio.com",
    projectId: "userapp-8f3fc",
    storageBucket: "userapp-8f3fc.appspot.com",
    messagingSenderId: "446058017335",
    appId: "1:446058017335:web:941fb5ce608d85bea985b2",
    measurementId: "G-RTDJXEDMJR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig,);
  
  export default firebase;