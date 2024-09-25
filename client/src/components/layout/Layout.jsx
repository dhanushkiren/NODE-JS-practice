import React from "react";
import { Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import TopNavigation from "./TopNavigation";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Container fluid>
        <ToastContainer />
        <TopNavigation />
        <Container className="mt-4 mb-5">{children}</Container>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
