import React from 'react';
import { Grid, Row, Col, Image, Navbar } from 'react-bootstrap';

const NavBar = ({ src, title, onClick, counter, select }) => {
  return (
    <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <a className="trivia" href="#home">
            Trivia
          </a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Navbar.Text>
          <Image className="navbar-pic" src={src} circle />
          Signed in as: <span>{title}</span>
        </Navbar.Text>
        <Navbar.Text pullRight>
          {counter === 0 ? (
            select ? (
              <span>1 / 10</span>
            ) : null
          ) : counter > 10 ? null : select ? (
            <span>{counter} / 10</span>
          ) : null}
          <a onClick={onClick}>
            <i class="fas fa-power-off" />
          </a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
