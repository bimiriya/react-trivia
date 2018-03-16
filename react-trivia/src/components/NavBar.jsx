import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';


const NavBar = ({src, title, onClick, counter, select }) => {
  console.log(select);
  console.log(counter);

  return (
    <div className="navdone">
    <Grid>
      <Row>
      <Col xs={6} sm={6} md={6} lg={6}>
        <div className="navleft">
        <h3>Trivia</h3>
        {
          counter === 0 ? (select ? <p>1/10</p> : null ) : counter  > 10 ? null : (select ? <p>{counter}/10</p> : null )
        }
        </div>
      </Col>
      <Col xs={6} sm={6} md={6} lg={6}>
      <div className="navright text-right" >
        <h3>{title}</h3>
        <Image className="navbar-pic" src={src} circle />
      </div>
      </Col>
      </Row>
    </Grid>
    </div>
    // <Navbar inverse collapseOnSelect>
    //   <Navbar.Header>
    //     <Navbar.Brand>
    //       <a href="#home">Trivia</a>
    //       {
    //         counter === 0 ? (select ? <p>1/10</p> : null ) : counter  > 10 ? null : (select ? <p>{counter}/10</p> : null )
    //       }
    //     </Navbar.Brand>
    //     <Navbar.Toggle />
    //   </Navbar.Header>
    //   <Navbar.Collapse>
    //       <Nav pullRight>
    //         <NavDropdown eventKey={3} title={title} id="basic-nav-dropdown">
    //           <MenuItem eventKey={3.1}>Score</MenuItem>
    //           <MenuItem onClick={onClick} eventKey={3.2}>Logout</MenuItem>
    //         </NavDropdown>
    //       <NavItem>
    //         
    //       </NavItem>
    //       </Nav>
    //   </Navbar.Collapse>
    // </Navbar>
  );
}

export default NavBar;