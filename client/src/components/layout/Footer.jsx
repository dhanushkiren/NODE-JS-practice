import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <Container>
      <hr />
      <Row className="mt-5 justify-content-center">
        <Col md={{ span: 3, offset: 1 }}>
          <h4 className="text-decoration-underline">User</h4>
          <NavLink className="text-muted" to="/create">
            Create a User
          </NavLink>
        </Col>

        <Col md={{ span: 3, offset: 1 }}>
          <h4 className="text-decoration-underline">Contact</h4>
          <NavLink className="text-dark" to="/contact">
            Contact us
          </NavLink>
        </Col>

        <Col md={{ span: 3, offset: 1 }}>
          <h4 className="text-decoration-underline">About</h4>
          <NavLink className="text-muted" to="/about">
            About Us
          </NavLink>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
