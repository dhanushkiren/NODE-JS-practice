import React from "react";
import Layout from "../../components/layout/Layout.jsx";
import * as userService from "../../services/user.service.js";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Row, Col, Form } from "react-bootstrap";

const RemoveUser = () => {
  const DELAY_BEFORE_REDIRECT_MS = 1000;
  const { userId } = useParams();

  const CancelAction = () => {
    window.location.href = "/";
  };

  const SubmitForm = async () => {
    try {
      const response = await userService.RemoveUser(userId);

      if (response?.status) {
        toast.success("User has been Successfully removed.");
      } else {
        toast.warn("User couldn't be removed successfully");
      }
      setTimeout(() => {
        window.location.href = "/";
      }, DELAY_BEFORE_REDIRECT_MS);
    } catch (error) {
      toast.error("User cannot be removed");
      console.error(error.message);
    }
  };

  return (
    <Layout>
      <h3 className="text-center">Are you sure to remove the user ?</h3>
      <Row className="justify-content-center mt-4">
        <Col lg={4}>
          <Form className="mt-4">
            <Button variant="danger" onClick={SubmitForm} className="m-1">
              Yes, Remove user
            </Button>
            <Button variant="secondary" onClick={CancelAction} className="m-1">
              No, revert the action
            </Button>
          </Form>
        </Col>
      </Row>
    </Layout>
  );
};

export default RemoveUser;
