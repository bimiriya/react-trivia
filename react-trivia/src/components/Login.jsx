import React, { Component } from 'react';
import firebase, { auth, provider } from '../firebase.js';
import { Navbar, Grid, Row, Col, Image, NavDropdown, MenuItem, Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';

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
                <Navbar inverse collapseOnSelect>
                  <Navbar.Header>
                    <Navbar.Brand>
                      <a href="#home">Trivia</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                  </Navbar.Header>
                  <Navbar.Collapse>
                    <Navbar.Text pullRight>
                    <Nav>
                    <Image className="navbar-pic" src={this.state.user.photoURL} circle />
                      <NavDropdown eventKey={3} title={this.state.user.displayName} id="basic-nav-dropdown">
                      <MenuItem eventKey={3.1}>Score</MenuItem>
                      <MenuItem onClick={this.logout} eventKey={3.2}>Logout</MenuItem>
                    </NavDropdown>
                    </Nav>
                    </Navbar.Text>
                  </Navbar.Collapse>
                </Navbar>
            ) : (
              <Grid>
                 <Row className="show-grid">
                  <Col xs={12} sm={12} md={6} mdOffset={3} lg={6} lgOffset={3}>
                    <div className="login-container text-center">
                      <h1>Play trivia!</h1>
                      <button className="btn" onClick={this.login}>
                      <i class="fab fa-google"></i>
                      <span>Log in with your Google account</span>
                      </button>
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
