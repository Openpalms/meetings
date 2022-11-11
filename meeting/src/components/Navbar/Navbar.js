import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import UserInfo from '../Menu/UserInfo';
import Offcanvas from 'react-bootstrap/Offcanvas';
const Navibar = () => {
  const badge = useSelector((state) => state.cards.users);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      collapseOnSelect
      className="position-sticky"
    >
      <Container>
        <Navbar.Brand as={NavLink} to="">
          Meeting
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/likes" className="mr-2">
              Your likes
              {badge.length > 0 ? (
                <Badge bg="secondary">+{badge.length}</Badge>
              ) : null}
            </Nav.Link>
            <span className="navbarResponsiveSettings">
              <Nav.Link className="mr-2 " onClick={handleShow}>
                Settings
              </Nav.Link>
            </span>
            <Nav.Link as={NavLink} reloadDocument>
              Logout
            </Nav.Link>

            <Offcanvas
              show={show}
              onHide={handleClose}
              className="text-bg-dark"
            >
              <Offcanvas.Header
                closeButton
                className="navbarResponsiveSettings"
              >
                <Offcanvas.Title>Settings!</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <UserInfo />
              </Offcanvas.Body>
            </Offcanvas>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navibar;
