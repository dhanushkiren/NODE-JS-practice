import React, { useState } from "react";
import * as userService from "../../services/user.service.js";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import Layout from "../../components/layout/Layout.jsx";
import { firstUpperCase } from "../../helpers/string.helper.js";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const SubmitForm = async (event) => {
    event.preventDefault();
    const payload = {
      name,
      email,
      age,
    };

    try {
      const response = await userService.CreateUser(payload);

      if (response?.status) {
        // give a success message
        const getUserId = response?.user?.id;
        toast.success(`User ${getUserId} created successfully..`);
        //clear states
        setName("");
        setEmail("");
        setAge("");
      } else {
        // give error message
        toast.warn("An error has occured...");
      }
    } catch (error) {
      // we receive somrthing wrong

      const getErrorMessage = () => {
        const {
          data: {
            errors: { body },
          },
        } = error.response;
        const message = body[0]?.message;

        return firstUpperCase(message);
      };

      toast.error(getErrorMessage());
    }
  };

  return (
    <>
      <Layout>
        <Row className="justify-content-center">
          <Col lg={6}>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  onChange={(fieldElement) =>
                    setName(fieldElement.target.value)
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  onChange={(fieldElement) =>
                    setEmail(fieldElement.target.value)
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="age"
                  onChange={(fieldElement) => setAge(fieldElement.target.value)}
                />
              </Form.Group>
              <Button varient="primary" type="submit" onClick={SubmitForm}>
                Add User
              </Button>
            </Form>
          </Col>
        </Row>
      </Layout>
    </>
  );
};

export default CreateUser;
