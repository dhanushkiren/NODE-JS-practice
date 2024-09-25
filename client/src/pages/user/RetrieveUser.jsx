import React, { useEffect, useState } from "react";
import * as userService from "../../services/user.service.js";
import { Col, Row, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Layout from "../../components/layout/Layout.jsx";

const RetrieveUser = () => {
  const { userId } = useParams();
  const [user, setUser] = useState({});

  const fetchUsers = async () => {
    try {
      const user = await userService.RetrieveUser(userId);
      console.log(user);
      setUser(user);
    } catch (err) {
      setUser(null);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [userId]);

  return (
    <Layout>
      {user ? (
        <Row className="justify-content-center">
          <Col lg={6}>
            <h3 className="text-center mb-3">{user.name}</h3>
            <Card>
              <Card.Body className="text-center">
                <h4>{user.email}</h4>
                <p>{user.age}</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ) : (
        <div className="text-center text-danger fw-bold">User not Found...</div>
      )}
    </Layout>
  );
};

export default RetrieveUser;
