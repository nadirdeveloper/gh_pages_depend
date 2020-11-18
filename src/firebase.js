// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyB0z5GoLam0LEMhGzzDXPpbMkO9BaYLyLI",
    authDomain: "facebookclone-50efc.firebaseapp.com",
    databaseURL: "https://facebookclone-50efc.firebaseio.com",
    projectId: "facebookclone-50efc",
    storageBucket: "facebookclone-50efc.appspot.com",
    messagingSenderId: "559483357414",
    appId: "1:559483357414:web:d17c6fdbf98be4d2e1d327",
    measurementId: "G-J100KH2RK6"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth= firebase.auth();
  const provider= new firebase.auth.GoogleAuthProvider();
  export {auth,provider};
  export default db ; 
