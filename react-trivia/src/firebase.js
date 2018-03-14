import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBepVwE4HIfCR2I2qicjlxauaCXkLcAQpk",
  authDomain: "react-trivia.firebaseapp.com",
  databaseURL: "https://react-trivia.firebaseio.com",
  projectId: "react-trivia",
  storageBucket: "react-trivia.appspot.com",
  messagingSenderId: "88902727572"
};
firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;