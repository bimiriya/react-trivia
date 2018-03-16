import React from 'react';
import { Navbar, Image, NavDropdown, MenuItem, Nav, NavItem } from 'react-bootstrap';


const NavBar = ({src, title, onClick, counter, select }) => {
  console.log(select);
  console.log(counter);

  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#home">Trivia</a>
        </Navbar.Brand>
        <NavItem>
          {
            counter === 0 ? (select ? <p>1/10</p> : null ) : counter  > 10 ? null : (select ? <p>{counter}/10</p> : null )
          }
            
        </NavItem>
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