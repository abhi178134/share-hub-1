import React, {useState} from "react";
import {Navbar, Nav, Form, Button, NavDropdown, FormControl} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import auth from '../services/auth';

const NavBar = ({}) => {
  const [user, setUser] = useState(auth.getCurrentUser);

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">Share Hub</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Stuffs Available</Nav.Link>
          <Nav.Link as={Link} to="/share">Share Stuffs</Nav.Link>
        </Nav>
        {user &&
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
          </Nav>
        }
        {!user &&
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
          </Nav>
        }
      </Navbar.Collapse>
    </Navbar>
  );

}

export default NavBar;
