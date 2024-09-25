import React from "react";
import Layout from "../../components/layout/Layout";
import { Col, Row } from "react-bootstrap";

const AboutUs = () => {
  return (
    <Layout>
      <h3 className="text-center">About Us</h3>
      <Row className="justify-content-center">
        <div className="text-center">
          About us. this is a simple application to learn ExpressJs, ReactJs,
          NodeJs. This project is the part of udemy Course to learn about NodeJs
          with ReactJs.
          <br /> I'm not done big project yet but i planing to do.{" "}
          <span className="fw-bold">Stay tune with my GitHub Profile.</span>
        </div>
      </Row>
    </Layout>
  );
};

export default AboutUs;
