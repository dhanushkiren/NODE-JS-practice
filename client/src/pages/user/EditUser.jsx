import React, { useEffect, useState } from "react";
import * as userService from "../../services/user.service.js";
import { NavLink, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Row, Col, Form, Button } from "react-bootstrap";
import Layout from "../../components/layout/Layout.jsx";
import { firstUpperCase } from "../../helpers/string.helper.js";

const EditUser = () => {
  const { userId } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const populateUserField = async () => {
    try {
      const user = await userService.RetrieveUser(userId);
      setName(user.name);
      setEmail(user.email);
      setAge(user.age);
    } catch (error) {
      console.error(error.messaage);
      window.location.href = "/";
    }
  };

  const subitForm = async (event) => {
    event.preventDefault();
    const payload = {
      name,
      email,
      age,
    };

    try {
      const response = await userService.EditUser(userId, payload);
      if (response.status) {
        const userName = response.data.name;
        toast.success(`${userName} has been updated succcessfully`);
      } else {
        toast.warn(`User sounldn't been updated...`);
      }
    } catch (error) {
      const RetrieveErrorMessage = () => {
        const {
          data: {
            errors: { body },
          },
        } = error.response;

        const errorMessage = body[0]?.messaage;

        return firstUpperCase(errorMessage);
      };

      toast.error(RetrieveErrorMessage());
    }
  };

  useEffect(() => {
    populateUserField();
  }, [userId]);

  return (
    <Layout>
      <h3 className="text-center mb-4 mt-4">Edit User </h3>
      <Row className="justify-content-center">
        <Col lg={6}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                placeholder="Name"
                onChange={(fieldElement) => setName(fieldElement.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                placeholder="Email"
                onChange={(fieldElement) => setEmail(fieldElement.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="text"
                value={age}
                placeholder="age"
                onChange={(fieldElement) => setAge(fieldElement.target.value)}
              />
            </Form.Group>
            <Button
              varient="primary"
              type="submit"
              onClick={subitForm}
              className="m-1"
            >
              Update User
            </Button>
            <Button
              variant="danger"
              as={NavLink}
              to={`/remove/${userId}`}
              className="m-1"
            >
              Remove
            </Button>
          </Form>
        </Col>
      </Row>
    </Layout>
  );
};

export default EditUser;
