import firebase from "firebase";


var firebaseConfig = {
    apiKey: "AIzaSyC6a0IZUz2k-OxTT9vCHapiEQn8LhyIJJ4",
    authDomain: "login-a3850.firebaseapp.com",
    projectId: "login-a3850",
    storageBucket: "login-a3850.appspot.com",
    messagingSenderId: "564034755627",
    appId: "1:564034755627:web:813854ee6a7d2267ae1e6e"
  };

  const fire = firebase.initializeApp(firebaseConfig);



  export default fire;