import React, {Component} from "react";
import {Navbar, Nav, Form, Button, NavDropdown, FormControl} from 'react-bootstrap';
import {Link} from 'react-router-dom';
class NavBar extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">Share Hub</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/items">Shared Stuffs</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
