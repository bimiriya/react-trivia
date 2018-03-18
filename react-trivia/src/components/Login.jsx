import React, { Component } from 'react';
import ReactDom from 'react-dom';
import GifPlayer from 'react-gif-player';
import firebase, { auth, provider } from '../firebase.js';
import PropTypes from 'prop-types';
import Home from './Home.jsx';
import { Grid, Row, Col } from 'react-bootstrap';
import WelcomePic from './../img/auth.gif';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      user: null // se inicializa el state del usuario en null
    };

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  // para que la sesión del usuario no se cierre al refrescar la página
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      }
    });
  }

  logout() {
    auth.signOut().then(() => {
      this.setState({
        user: null
      });
    });
  }

  login() {
    auth.signInWithPopup(provider).then(result => {
      const user = result.user;
      this.setState({
        user
      });
    });
  }

  render() {
    return (
      <div className="app">
        {this.state.user ? (
          <Home
            src={this.state.user.photoURL}
            title={this.state.user.displayName}
            onClick={this.logout}
          />
        ) : (
          <Grid>
            <Row className="show-grid">
              <Col xs={12} sm={12} md={6} mdOffset={3} lg={6} lgOffset={3}>
                <div className="login-container text-center">
                  <Row className="show-grid">
                    <Col
                      xs={6}
                      xsOffset={3}
                      sm={6}
                      smOffset={3}
                      md={6}
                      mdOffset={3}
                      lg={6}
                      lgOffset={3}
                    >
                      <GifPlayer gif={WelcomePic} still={WelcomePic} />
                    </Col>
                  </Row>
                  <Row className="show-grid">
                    <Col xs={12} sm={12} md={12} lg={12}>
                      <h1>Play trivia!</h1>
                    </Col>
                  </Row>
                  <Row className="show-grid">
                    <Col
                      xs={8}
                      xsOffset={2}
                      sm={8}
                      smOffset={2}
                      md={8}
                      mdOffset={2}
                      lg={8}
                      lgOffset={2}
                    >
                      <p className="text-justify">
                        Test your knowledge in any area of your choosing and
                        challenge yourself everyday!
                      </p>
                    </Col>
                  </Row>
                  <Row className="show-grid">
                    <Col xs={12} sm={12} md={12} lg={12}>
                      <button className="btn btn-warning" onClick={this.login}>
                        <i className="fab fa-google" />
                        <span>Log in with your Google account</span>
                      </button>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Grid>
        )}
      </div>
    );
  }
}

Login.propTypes = {};

export default Login;
