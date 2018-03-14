import React, { Component } from 'react';
import firebase, { auth, provider } from './firebase.js';
import Login from './components/Login'
import { Navbar, Image, NavDropdown, MenuItem, Nav } from 'react-bootstrap';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="app">
        <Login />
      </div>
    );
  }
}

export default App;
