import React from 'react';
import { Navbar, Nav, Badge } from 'react-bootstrap';

function FacebookNavbar() {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#">Facebook</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="#"><i className="icon">🏠</i></Nav.Link>
        <Nav.Link href="#"><i className="icon">👥</i></Nav.Link>
        <Nav.Link href="#"><i className="icon">📁</i></Nav.Link>
        <Nav.Link href="#">
          <i className="icon">🔔</i>
          <Badge variant="danger">3</Badge>
        </Nav.Link>
        <Nav.Link href="#"><i className="icon">📩</i></Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default FacebookNavbar;
