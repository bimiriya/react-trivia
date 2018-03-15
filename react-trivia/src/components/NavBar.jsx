import React from 'react';
import { Navbar, Image, NavDropdown, MenuItem, Nav, NavItem } from 'react-bootstrap';


const NavBar = ({src, title, onClick }) => {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#home">Trivia</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
          <Nav pullRight>
          <NavItem>
            <Image className="navbar-pic" src={src} circle />
          </NavItem>
            <NavDropdown eventKey={3} title={title} id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Score</MenuItem>
              <MenuItem onClick={onClick} eventKey={3.2}>Logout</MenuItem>
            </NavDropdown>
          </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;