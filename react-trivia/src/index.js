import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBepVwE4HIfCR2I2qicjlxauaCXkLcAQpk",
  authDomain: "react-trivia.firebaseapp.com",
  databaseURL: "https://react-trivia.firebaseio.com",
  projectId: "react-trivia",
  storageBucket: "react-trivia.appspot.com",
  messagingSenderId: "88902727572"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
