import firebase from'firebase';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const config = {
    apiKey: "AIzaSyB1mD86pGr3sMW33YrUhNtwqDUIRgcKqr8",
    authDomain: "feedback-3b77c.firebaseapp.com",
    databaseURL: "https://feedback-3b77c.firebaseio.com",
    projectId: "feedback-3b77c",
    storageBucket: "feedback-3b77c.appspot.com",
    messagingSenderId: "496971093098"
};
firebase.initializeApp(config);
window.firebase = firebase;

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
