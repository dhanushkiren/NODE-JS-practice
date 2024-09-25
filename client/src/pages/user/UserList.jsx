import React, { useEffect, useState } from "react";
import * as userService from "../../services/user.service.js";
import { Button, Card, Col, Row } from "react-bootstrap";
import { List } from "react-content-loader";
import Layout from "../../components/layout/Layout.jsx";
import { NavLink } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUsers = async () => {
    try {
      setIsLoading(true);
      const users = await userService.RetrieveAllUser();
      setUsers(users);
    } catch (error) {
      const retrieveErrorMessage = () => {
        const apiErrorMessage = error?.response?.data?.message;
        return apiErrorMessage ?? "No Users";
      };

      setErrorMessage(retrieveErrorMessage());
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const renderedUsers = Object.values(users).map((user) => {
    return (
      <>
        <Col key={user.id} lg={4} className="p-1">
          <Card>
            <Card.Body>
              <h4>{user.name}</h4>
              <p>{user.email}</p>
              <Button variant="secondary" as={NavLink} to={`/edit/${user.id}`}>
                Edit user
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </>
    );
  });

  return (
    <Layout>
      {isLoading ? (
        <div className="text-center">
          <List />
        </div>
      ) : (
        <>
          {errorMessage ? (
            <p className="text-center text-danger fw-bold">{errorMessage}</p>
          ) : (
            <>
              <h3 className="text-center mb-3">Users</h3>
              <Row className="justify-content-center">{renderedUsers}</Row>
            </>
          )}
        </>
      )}
    </Layout>
  );
};

export default UserList;
