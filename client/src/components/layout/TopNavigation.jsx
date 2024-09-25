import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const TopNavigation = () => {
  return (
    <Navbar sticky="top" bg="light" varient="light" className="mb-4">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Simple Client
        </Navbar.Brand>
        <Nav className="flex-grow-1 justify-content-end">
          {/* <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link> */}
          <Nav.Link
            as={NavLink}
            to="/create"
            className="fw-bold badge bg-primary text-wrap text-white fst-italic"
          >
            Create User
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default TopNavigation;
