// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app";
import "firebase/auth";
// import "firebase/auth"
// import "firebase/auth"
const config = {
  apiKey: "AIzaSyD6njDBFkYlcOGrveMx140MbWPplVyvGCE",
  authDomain: "redux-toolkit-firebase.firebaseapp.com",
  projectId: "redux-toolkit-firebase",
  storageBucket: "redux-toolkit-firebase.appspot.com",
  messagingSenderId: "70875396278",
  appId: "1:70875396278:web:582b64e981406b9c9d8e17",
  measurementId: "G-5S6W2RGG69",
};
firebase.initializeApp(config);
// firebase.initializeApp(firebaseConfig)
// const auth =firebase.auth()
const auth = firebase.auth();

const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();
export { auth, GoogleAuthProvider };
