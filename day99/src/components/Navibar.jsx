import React from 'react'
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navibar = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg" >
        <Container>
          <Navbar.Brand><Link className="text-white text-decoration-none" to="/">Exercise Tracker</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link ><Link className="navtextcolor text-decoration-none"  to="/">Exercises</Link></Nav.Link>
              <Nav.Link ><Link className="navtextcolor text-decoration-none"  to="/create">Create Exercise Log</Link></Nav.Link>
              <Nav.Link ><Link className="navtextcolor text-decoration-none"  to="/user">Create User</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navibar
